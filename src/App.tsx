/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useCallback, useState } from "react";
import "./App.css";
import useInterval from "./hooks/useInterval";

const INTERVAL_MILISECONDS = 10;

function App() {
  const [counter, setCounter] = useState(0);
  const [counterStatus, setCounterStatus] = useState<boolean>(false);

  const increaseCounter = useCallback(() => {
    setCounterStatus(true);
    setCounter((prevCounter) => prevCounter + INTERVAL_MILISECONDS);
  }, []);

  const { init, stop } = useInterval(increaseCounter, INTERVAL_MILISECONDS);

  const handlePauseOrRestart = () => {
    setCounterStatus((prev) => {
      if (prev) {
        stop();
      } else {
        init();
      }

      return !prev;
    });
  };

  const handleReset = () => {
    setCounter(0);
    setCounterStatus(false);
    stop();
  };

  const stopWatchStarted = counter > 0;
  const timeInSeconds = (counter / 1000).toFixed(2);

  let className = `w-full h-full `;
  className += counterStatus ? "bg-amber-500 " : "bg-blue-500 ";

  return (
    <>
      <div className={className}>
        <div>
          <h1>Stopwatch</h1>
        </div>
        <div>{timeInSeconds}</div>
        {!stopWatchStarted && (
          <div>
            <button onClick={init}>Init</button>
          </div>
        )}

        {stopWatchStarted && (
          <div>
            <span>
              <button onClick={handlePauseOrRestart}>
                {counterStatus ? "Pause" : "Resume"}
              </button>
            </span>
            <span>
              <button onClick={handleReset}>Reset</button>
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
