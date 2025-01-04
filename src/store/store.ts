import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";
import themeReducer from "./themeSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    theme: themeReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
