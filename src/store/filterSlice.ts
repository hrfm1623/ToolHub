import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Platform, ProgrammingLanguage } from "../types/tool";

export interface FilterState {
  searchTerm: string;
  selectedCategory: string;
  selectedPlatforms: Platform[];
  selectedLanguages: ProgrammingLanguage[];
  priceRange: {
    min: number | null;
    max: number | null;
  };
  sortBy: "name" | "category" | "platform";
  sortOrder: "asc" | "desc";
}

const initialState: FilterState = {
  searchTerm: "",
  selectedCategory: "",
  selectedPlatforms: [],
  selectedLanguages: [],
  priceRange: {
    min: null,
    max: null,
  },
  sortBy: "name",
  sortOrder: "asc",
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
    toggleLanguage: (state, action: PayloadAction<ProgrammingLanguage>) => {
      const language = action.payload;
      const index = state.selectedLanguages.indexOf(language);
      if (index === -1) {
        state.selectedLanguages.push(language);
      } else {
        state.selectedLanguages.splice(index, 1);
      }
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number | null; max: number | null }>
    ) => {
      state.priceRange = action.payload;
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
  toggleLanguage,
  setPriceRange,
  setSortBy,
  setSortOrder,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
