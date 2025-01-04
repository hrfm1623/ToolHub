import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "toolhub_theme";

interface ThemeState {
  isDarkMode: boolean;
}

// システムのカラーモード設定を取得
const getSystemTheme = (): boolean => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

// LocalStorageから初期状態を読み込む
const loadInitialState = (): ThemeState => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState !== null) {
      return JSON.parse(savedState);
    }
    // LocalStorageに保存がない場合はシステム設定を使用
    return { isDarkMode: getSystemTheme() };
  } catch (error) {
    console.error("Failed to load theme from localStorage:", error);
    return { isDarkMode: getSystemTheme() };
  }
};

const initialState: ThemeState = loadInitialState();

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // LocalStorageに保存
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.error("Failed to save theme to localStorage:", error);
      }
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
      // LocalStorageに保存
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.error("Failed to save theme to localStorage:", error);
      }
    },
  },
});

export const { toggleTheme, setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
