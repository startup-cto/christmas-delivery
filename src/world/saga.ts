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
import { selectTimeBetweenTicksInMS } from "./selectors/selectTimeBetweenTicksInMS";

export function* worldSaga() {
  yield* fork(runGame);
  yield* takeEvery(actions.wait, checkWinCondition);
  yield* takeEvery(actions.wait, checkLoseCondition);
}

function* runGame() {
  while (true) {
    yield* take(actions.runGame);
    const waitTicksSaga = yield* fork(regularlyWaitTicks);
    yield* take(levelActions.winLevel);
    yield* cancel(waitTicksSaga);
  }
}

function* regularlyWaitTicks() {
  while (true) {
    yield* put(actions.wait());
    const timeBetweenTicksInMS = yield* select(selectTimeBetweenTicksInMS);
    yield* delay(timeBetweenTicksInMS);
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
