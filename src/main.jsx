import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeWrapper } from "./components/theme-provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeWrapper defaultTheme="slate" storageKey="vite-ui-theme">
      <App />
    </ThemeWrapper>
  </React.StrictMode>
);
