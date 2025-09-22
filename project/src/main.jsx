import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/style.scss";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CounterProvider } from "./context/CounterContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <CounterProvider>
      <App />
    </CounterProvider>
  </ThemeProvider>
);
