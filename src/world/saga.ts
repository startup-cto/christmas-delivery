import {
  cancel,
  delay,
  fork,
  put,
  select,
  take,
  takeEvery,
} from "typed-redux-saga";
import { actions } from "./slice";
import { actions as levelActions } from "../currentLevel/slice";
import { Vector2D } from "../utils/Vector2D/Vector2D";
import { selectSleighs } from "../sleighs/selectors/selectSleights";
import { selectHouses } from "../houses/selectors/selectHouses";
import { selectTicks } from "./selectors/selectTicks";

export function* worldSaga() {
  yield* fork(runGame);
  yield* takeEvery(actions.waitTicks.toString(), checkWinCondition);
  yield* takeEvery(actions.waitTicks.toString(), checkLoseCondition);
}

function* runGame() {
  while (true) {
    yield* take(actions.runGame.toString());
    const waitTicksSaga = yield* fork(regularlyWaitTicks);
    yield* take(levelActions.winLevel.toString());
    yield* cancel(waitTicksSaga);
  }
}

function* regularlyWaitTicks() {
  while (true) {
    const ticksPerFrame = yield* select((state) => state.world.ticksPerFrame);
    yield* put(actions.waitTicks(ticksPerFrame));
    const fps = yield* select((state) => state.world.fps);
    yield* delay(1000 / fps);
  }
}

function* checkWinCondition() {
  const sleighs = yield* select(selectSleighs);
  const houses = yield* select(selectHouses);
  if (
    houses.length === 1 &&
    sleighs.length === 1 &&
    new Vector2D(houses[0].position).equals(sleighs[0].position)
  ) {
    yield* put(levelActions.winLevel());
  }
}

function* checkLoseCondition() {
  const ticks = yield* select(selectTicks);
  const maxTicks = 100;
  if (ticks > maxTicks) {
    yield* put(levelActions.loseLevel());
  }
}
