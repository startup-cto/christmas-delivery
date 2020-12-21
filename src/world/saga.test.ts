import { expectSaga } from "redux-saga-test-plan";
import { worldSaga } from "./saga";
import { actions } from "./slice";
import { actions as levelActions } from "../currentLevel/slice";
import { MockSleigh } from "../sleighs/MockSleigh";
import { MockHouse } from "../houses/MockHouse";
import { Pixel } from "../models/Pixel";

describe("worldSaga", () => {
  describe("runTicks", () => {
    describe("if the game is running", () => {
      const isRunning = true;

      it("dispatches waitTicks", async () => {
        const world = {
          fps: 50,
          isRunning,
          size: { width: 100 as Pixel, height: 100 as Pixel },
          ticks: 0,
          ticksPerFrame: 1,
        };
        await expectSaga(worldSaga)
          .put(actions.waitTicks(world.ticksPerFrame))
          .withState({
            sleighs: [],
            houses: [],
            world,
          })
          .dispatch(actions.runGame(world))
          .silentRun();
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
