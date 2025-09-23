import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }
    } catch (error) {
      console.error("Error parsing localStorage item:", error);
    }
    return defaultValue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Error setting localStorage item:", error);
    }
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;