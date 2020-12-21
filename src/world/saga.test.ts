import { expectSaga } from "redux-saga-test-plan";
import { worldSaga } from "./saga";
import { actions } from "./slice";
import { actions as levelActions } from "../currentLevel/slice";
import { MockSleigh } from "../sleighs/MockSleigh";
import { MockHouse } from "../houses/MockHouse";
import { Pixel } from "../models/Pixel";
import { put } from "redux-saga/effects";
import { equals } from "ramda";
import { RootState } from "../store/RootState";
import { MockRootState } from "../store/MockRootState";
import { MockWorld } from "./MockWorld";

describe("worldSaga", () => {
  describe("runTicks", () => {
    it("dispatches only waitTicks actions", async () => {
      const initialState = new MockRootState();
      const result = await expectSaga(worldSaga)
        .withState(initialState)
        .dispatch(actions.runGame(initialState.world))
        .silentRun();
      expect(result.effects.put).toSatisfyAll(
        equals(put(actions.waitTicks(initialState.world.ticksPerFrame)))
      );
    });

    it("dispatches one waitTicks action per delay effect resolved", async () => {
      const initialState = new MockRootState();
      const result = await expectSaga(worldSaga)
        .withState(initialState)
        .dispatch(actions.runGame(initialState.world))
        .silentRun();

      // The testing framework does not support delay effects,
      // but as they are handled as calls, we can work around this
      const numberOfDelayEffects = result.effects.call.length;
      expect(result.effects.put.length).toBe(numberOfDelayEffects);
    });

    it("no longer dispatches waitTicks actions after winning the game", async () => {
      const initialState = new MockRootState();
      let wasWinLevelDispatched = false;
      let wasWaitTicksDispatchedAfterWinLevel = false;
      await expectSaga(worldSaga)
        .withReducer((state: RootState = initialState, action) => {
          if (action.type === levelActions.winLevel.toString()) {
            wasWinLevelDispatched = true;
          }
          if (
            wasWinLevelDispatched &&
            action.type === actions.waitTicks.toString()
          ) {
            wasWaitTicksDispatchedAfterWinLevel = true;
          }
          return state;
        })
        .dispatch(actions.runGame(initialState.world))
        .delay(10)
        .dispatch(levelActions.winLevel())
        .silentRun();
      expect(wasWaitTicksDispatchedAfterWinLevel).toBe(false);
    });
  });

  describe("checkWinCondition", () => {
    describe("if the sleigh is at the house", () => {
      it("dispatches a winning action", async () => {
        const position = {
          x: 0 as Pixel,
          y: 0 as Pixel,
        };

        await expectSaga(worldSaga)
          .put(levelActions.winLevel())
          .withState(
            new MockRootState({
              houses: [new MockHouse({ position })],
              sleighs: [new MockSleigh({ position })],
            })
          )
          .dispatch(actions.waitTicks(1))
          .silentRun();
      });
    });
  });

  describe("checkLossCondition", () => {
    describe("if more than 100 ticks passed", () => {
      it("dispatches a losing action", async () => {
        await expectSaga(worldSaga)
          .put(levelActions.loseLevel())
          .withState(
            new MockRootState({
              world: new MockWorld({ ticks: 101 }),
            })
          )
          .dispatch(actions.waitTicks(1))
          .silentRun();
      });
    });
  });
});
