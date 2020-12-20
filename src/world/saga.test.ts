import { expectSaga } from "redux-saga-test-plan";
import { worldSaga } from "./saga";
import { actions } from "./slice";
import { actions as levelActions } from "../currentLevel/slice";
import { MockSleigh } from "../sleighs/MockSleigh";
import { MockHouse } from "../houses/MockHouse";
import { Pixel } from "../models/Pixel";

describe("worldSaga", () => {
  describe("winning the game", () => {
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
