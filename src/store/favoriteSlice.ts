import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tool } from "../types/tool";

const STORAGE_KEY = "toolhub_favorites";

interface FavoriteState {
  tools: Tool[];
}

// LocalStorageから初期状態を読み込む
const loadInitialState = (): FavoriteState => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    return savedState ? JSON.parse(savedState) : { tools: [] };
  } catch (error) {
    console.error("Failed to load favorites from localStorage:", error);
    return { tools: [] };
  }
};

const initialState: FavoriteState = loadInitialState();

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Tool>) => {
      if (!state.tools.some((tool) => tool.id === action.payload.id)) {
        state.tools.push(action.payload);
        // LocalStorageに保存
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (error) {
          console.error("Failed to save favorites to localStorage:", error);
        }
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.tools = state.tools.filter((tool) => tool.id !== action.payload);
      // LocalStorageに保存
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.error("Failed to save favorites to localStorage:", error);
      }
    },
    reorderFavorites: (state, action: PayloadAction<Tool[]>) => {
      state.tools = action.payload;
      // LocalStorageに保存
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.error("Failed to save favorites to localStorage:", error);
      }
    },
  },
});

export const { addFavorite, removeFavorite, reorderFavorites } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
