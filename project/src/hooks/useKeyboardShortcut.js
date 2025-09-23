import { useEffect } from "react";

function useKeyboardShortcut(increment, decrement) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            const tag = document.activeElement.tagName;
            if (tag === "INPUT" || tag === "TEXTAREA") return;

            if (e.key === "+" || e.key === "=") increment();
            if (e.key === "-") decrement();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [increment, decrement]);
}

export default useKeyboardShortcut;