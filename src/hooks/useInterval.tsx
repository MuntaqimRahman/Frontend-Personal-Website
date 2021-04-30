//useInterval hook taken from Dan Abramov, his explanation is below
//I've added typing to it to fit my purposes here
//https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;