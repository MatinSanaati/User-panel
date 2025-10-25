// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import uiReducer, { setTheme } from "../features/ui/uiSlise";

// ✅ تابع ایمن برای گرفتن تم اولیه
const getInitialTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light"; // برای محیط‌های غیرمرورگری
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
};

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

// ✅ تابع ایمن برای تنظیم تم اولیه
export const setInitialTheme = () => {
  if (typeof window === "undefined") return;

  const saved = localStorage.getItem("theme");
  let theme: "light" | "dark" = "light";

  if (saved === "dark" || saved === "light") {
    theme = saved;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  }

  store.dispatch(setTheme(theme));
};

// ✅ بلافاصله بعد از ساخت store، تم اولیه را تنظیم کن
const initialTheme = getInitialTheme();
store.dispatch(setTheme(initialTheme));

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
