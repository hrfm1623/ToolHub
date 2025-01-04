import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tool } from "../types/tool";

export interface FavoriteState {
  tools: Tool[];
  order: string[];
}

const initialState: FavoriteState = {
  tools: [],
  order: [],
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
        state.order.push(action.payload.id);
      } else {
        state.tools.splice(index, 1);
        state.order = state.order.filter((id) => id !== action.payload.id);
      }
    },
    reorderFavorites: (
      state,
      action: PayloadAction<{ startIndex: number; endIndex: number }>
    ) => {
      const { startIndex, endIndex } = action.payload;
      const [removed] = state.order.splice(startIndex, 1);
      state.order.splice(endIndex, 0, removed);

      const orderedTools = state.order.map(
        (id) => state.tools.find((tool) => tool.id === id)!
      );
      state.tools = orderedTools;
    },
  },
});

export const { toggleFavorite, reorderFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
