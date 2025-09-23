import { useEffect } from "react";

function useLocalStorage(key, state) {
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.error("Error setting localStorage item:", error);
        }
    }, [key, state]);
}

export default useLocalStorage;