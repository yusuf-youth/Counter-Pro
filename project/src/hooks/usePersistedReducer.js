import { useReducer, useEffect } from "react";

function usePersistedReducer(reducer, initialState, localStorageKey) {
    const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
        try {
            const storedValue = localStorage.getItem(localStorageKey);
            if (storedValue) {
                return JSON.parse(storedValue);
            }
        } catch (error) {
            console.error("Failed to parse stored state:", error);
        }
        return initial;
    });

    useEffect(() => {
        try {
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        } catch (error) {
            console.error("Failed to save state to localStorage:", error);
        }
    }, [state, localStorageKey]);

    return [state, dispatch];
}

export default usePersistedReducer;