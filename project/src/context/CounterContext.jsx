import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { STORAGE_KEYS } from "../script/constants";

const CounterContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
  counterName: "",
  setCounterName: () => {},
});

const initialCount = 0;

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return Math.max(0, state + 1);
    case "DECREMENT":
      return Math.max(0, state - 1);
    case "RESET":
      return initialCount;
    default:
      throw new Error();
  }
}

export const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(counterReducer, initialCount, () => {
    const storedCount = localStorage.getItem(STORAGE_KEYS.COUNT);
    if (storedCount !== null) {
      return Math.max(0, parseInt(storedCount, 10));
    }
    return initialCount;
  });

  const [counterName, setCounterName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem(STORAGE_KEYS.COUNTER_NAME);
    if (storedName !== null) {
      setCounterName(storedName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COUNTER_NAME, counterName);
  }, [counterName]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COUNT, count);
  }, [count]);

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const reset = () => dispatch({ type: "RESET" });

  useEffect(() => {
    const onKeyDown = (e) => {
      const tag = document.activeElement.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key === "+" || e.key === "=") increment();
      if (e.key === "-") decrement();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
        reset,
        counterName,
        setCounterName,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
