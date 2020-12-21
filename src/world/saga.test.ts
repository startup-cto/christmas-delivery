import { expectSaga } from "redux-saga-test-plan";
import { worldSaga } from "./saga";
import { actions } from "./slice";
import { actions as levelActions } from "../currentLevel/slice";
import { MockSleigh } from "../sleighs/MockSleigh";
import { MockHouse } from "../houses/MockHouse";
import { Pixel } from "../models/Pixel";
import { put } from "redux-saga/effects";
import { equals } from "ramda";

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
          .delay(1000 / world.fps)
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
          .delay(1000 / world.fps)
          .dispatch(actions.runGame(world))
          .silentRun();
        // The testing framework does not support delay effects,
        // but as they are handled as calls, we can work around this
        const numberOfDelayEffects = result.effects.call.length;
        expect(result.effects.put.length).toBe(numberOfDelayEffects);
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
