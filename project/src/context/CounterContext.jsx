import { createContext, useContext, useEffect } from "react";
import { COUNTER_ACTIONS, STORAGE_KEYS } from "../script/constants";
import useLocalStorageState from "../hooks/useLocalStorageState";
import usePersistedReducer from "../hooks/usePersistedReducer";
import useKeyboardShortcut from "../hooks/useKeyboardShortcut";
import { counterReducer, initialCount } from "../reducers/counterReducer";

const CounterContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
  counterName: "",
  setCounterName: () => {},
});

export const CounterProvider = ({ children }) => {
  const [count, dispatch] = usePersistedReducer(
    counterReducer,
    initialCount,
    STORAGE_KEYS.COUNT
  );

  const [counterName, setCounterName] = useLocalStorageState(
    STORAGE_KEYS.COUNTER_NAME,
    ""
  );

  const increment = () => dispatch({ type: COUNTER_ACTIONS.INCREMENT });
  const decrement = () => dispatch({ type: COUNTER_ACTIONS.DECREMENT });
  const reset = () => dispatch({ type: COUNTER_ACTIONS.RESET });

  useKeyboardShortcut(increment, decrement);

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
