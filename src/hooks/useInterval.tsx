import { useCallback, useEffect, useRef } from "react";

export default function useInterval(fn: Function, ms: number) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(undefined);
  const callbackRef = useRef(fn);

  useEffect(() => {
    callbackRef.current = fn;
  }, [fn]);

  const init = useCallback(() => {
    intervalRef.current = setInterval(() => {
      callbackRef.current();
    }, ms);
  }, [ms]);

  const stop = () => {
    intervalRef.current && clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    return stop;
  }, []);

  return { init, stop };
}
