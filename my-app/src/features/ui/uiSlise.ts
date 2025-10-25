// src/features/ui/uiSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface UiState {
  theme: Theme;
}

const initialState: UiState = {
  theme: "light",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { toggleTheme, setTheme } = uiSlice.actions;
export default uiSlice.reducer;
