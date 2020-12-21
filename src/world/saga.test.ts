import { expectSaga } from "redux-saga-test-plan";
import { worldSaga } from "./saga";
import { actions } from "./slice";
import { actions as levelActions } from "../currentLevel/slice";
import { MockSleigh } from "../sleighs/MockSleigh";
import { MockHouse } from "../houses/MockHouse";
import { Pixel } from "../models/Pixel";
import { put } from "redux-saga/effects";
import { equals } from "ramda";
import { State } from "../store";

function wait(waitTimeInMS: number) {
  return new Promise((resolve) => setTimeout(resolve, waitTimeInMS));
}

describe("worldSaga", () => {
  describe("runTicks", () => {
    describe("if the game is running", () => {
      const isRunning = true;

      it("dispatches only waitTicks actions", async () => {
        const world = {
          fps: 50,
          isRunning,
          size: { width: 100 as Pixel, height: 100 as Pixel },
          ticks: 0,
          ticksPerFrame: 1,
        };
        const result = await expectSaga(worldSaga)
          .withState({
            sleighs: [],
            houses: [],
            world,
          })
          .dispatch(actions.runGame(world))
          .silentRun();
        expect(result.effects.put).toSatisfyAll(
          equals(put(actions.waitTicks(world.ticksPerFrame)))
        );
      });

      it("dispatches one waitTicks action per delay effect resolved", async () => {
        const world = {
          fps: 50,
          isRunning,
          size: { width: 100 as Pixel, height: 100 as Pixel },
          ticks: 0,
          ticksPerFrame: 1,
        };
        const result = await expectSaga(worldSaga)
          .withState({
            sleighs: [],
            houses: [],
            world,
          })
          .dispatch(actions.runGame(world))
          .silentRun();
        // The testing framework does not support delay effects,
        // but as they are handled as calls, we can work around this
        const numberOfDelayEffects = result.effects.call.length;
        expect(result.effects.put.length).toBe(numberOfDelayEffects);
      });

      it("no longer dispatches waitTicks actions after winning the game", async () => {
        const world = {
          fps: 50,
          isRunning,
          size: { width: 100 as Pixel, height: 100 as Pixel },
          ticks: 0,
          ticksPerFrame: 1,
        };
        let wasWinLevelDispatched = false;
        let wasWaitTicksDispatchedAfterWinLevel = false;
        await expectSaga(worldSaga)
          .withReducer(
            (
              state: State = {
                currentLevel: {
                  isCompleted: false,
                },
                sleighs: [],
                houses: [],
                world,
              },
              action
            ) => {
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
            }
          )
          .dispatch(actions.runGame(world))
          .delay(10)
          .dispatch(levelActions.winLevel())
          .silentRun();
        expect(wasWaitTicksDispatchedAfterWinLevel).toBe(false);
      });
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
          .withState({
            houses: [new MockHouse({ position })],
            sleighs: [new MockSleigh({ position })],
          })
          .dispatch(actions.waitTicks(1))
          .silentRun();
      });
    });
  });
});
