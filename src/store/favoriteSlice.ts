import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteTool, Tool } from "../types/tool";

interface FavoriteState {
  favorites: FavoriteTool[];
}

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Tool>) => {
      const favoriteTool: FavoriteTool = {
        ...action.payload,
        addedAt: new Date().toISOString(),
      };
      state.favorites.push(favoriteTool);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (tool) => tool.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
