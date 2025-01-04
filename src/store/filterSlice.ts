import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Platform, Difficulty } from "../types/tool";

export interface FilterState {
  searchTerm: string;
  selectedCategory: string;
  selectedPlatforms: Platform[];
  selectedDifficulty: Difficulty | null;
  priceRange: {
    min: number | null;
    max: number | null;
  };
  rating: number | null;
  sortBy: "name" | "category" | "rating" | "downloadCount";
  sortOrder: "asc" | "desc";
}

const initialState: FilterState = {
  searchTerm: "",
  selectedCategory: "",
  selectedPlatforms: [],
  selectedDifficulty: null,
  priceRange: {
    min: null,
    max: null,
  },
  rating: null,
  sortBy: "rating",
  sortOrder: "desc",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    togglePlatform: (state, action: PayloadAction<Platform>) => {
      const platform = action.payload;
      const index = state.selectedPlatforms.indexOf(platform);
      if (index === -1) {
        state.selectedPlatforms.push(platform);
      } else {
        state.selectedPlatforms.splice(index, 1);
      }
    },
    setDifficulty: (state, action: PayloadAction<Difficulty | null>) => {
      state.selectedDifficulty = action.payload;
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number | null; max: number | null }>
    ) => {
      state.priceRange = action.payload;
    },
    setRating: (state, action: PayloadAction<number | null>) => {
      state.rating = action.payload;
    },
    setSortBy: (state, action: PayloadAction<FilterState["sortBy"]>) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<FilterState["sortOrder"]>) => {
      state.sortOrder = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setSearchTerm,
  setSelectedCategory,
  togglePlatform,
  setDifficulty,
  setPriceRange,
  setRating,
  setSortBy,
  setSortOrder,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
