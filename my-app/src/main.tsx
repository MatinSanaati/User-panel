// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, setInitialTheme } from "./app/store";
import App from "./App";
import "./styles/global.css";

// ✅ این تابع را مستقیماً اینجا تعریف می‌کنیم — نه در سطح ماژول خارج از تابع
const applyThemeToHtml = () => {
  if (typeof window === "undefined") return;

  const theme = store.getState().ui.theme;
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

setInitialTheme(); // ← این تابع dispatch می‌کند
applyThemeToHtml(); // ← این کلاس dark را ست می‌کند

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
