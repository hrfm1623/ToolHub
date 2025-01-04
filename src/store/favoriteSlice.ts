import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tool } from "../types/tool";

export interface FavoriteState {
  tools: Tool[];
}

const initialState: FavoriteState = {
  tools: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Tool>) => {
      const index = state.tools.findIndex(
        (tool) => tool.id === action.payload.id
      );
      if (index === -1) {
        state.tools.push(action.payload);
      } else {
        state.tools.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
