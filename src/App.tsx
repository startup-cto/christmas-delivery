import { useDispatch, useSelector } from "react-redux";
import { State } from "./components/Display/State";
import { Display } from "./components/Display/Display";
import React, { useEffect } from "react";
import { actions as worldActions } from "./world/slice";
import { actions as sleighActions } from "./sleighs/slice";
import { Pixel } from "./models/Pixel";

export function App() {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => dispatch(worldActions.waitTicks(1)), 100);
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <>
      <Display state={state} />
      <button
        onClick={() =>
          dispatch(
            sleighActions.moveSleigh({
              sleighId: "1",
              targetPosition: {
                x: 100 as Pixel,
                y: 100 as Pixel,
              },
            })
          )
        }
      >
        Tell santa to move to the house!
      </button>
    </>
  );
}
