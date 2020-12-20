import { delay, put, select, takeEvery } from "typed-redux-saga";
import { actions } from "./slice";

export function* worldSaga() {
  yield* takeEvery(actions.runGame.toString(), runTicks);
}

function* runTicks() {
  while (true) {
    const ticksPerFrame = yield* select((state) => state.world.ticksPerFrame);
    yield* put(actions.waitTicks(ticksPerFrame));
    const fps = yield* select((state) => state.world.fps);
    yield* delay(1000 / fps);
  }
}
