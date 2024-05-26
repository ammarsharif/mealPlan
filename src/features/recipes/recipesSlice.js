import { createSlice } from '@reduxjs/toolkit';

import recipes from './RecipesList';

const initialState = {
  recipes: recipes,

  planner: Array(7).fill({ breakfast: null, lunch: null, dinner: null }),
  sidebarVisible: false,
  currentMealType: null,
  currentDayIndex: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipeToPlanner: (state, action) => {
      const { dayIndex, mealType, recipe } = action.payload;
      state.planner[dayIndex][mealType] = recipe;
    },
    toggleSidebar: (state, action) => {
      const { dayIndex, mealType } = action.payload;
      state.sidebarVisible = !state.sidebarVisible;
      state.currentMealType = mealType;
      state.currentDayIndex = dayIndex;
    },
    moveRecipe: (state, action) => {
      const { source, destination } = action.payload;
      const [sourceMealType, sourceDayIndex] = source.split('-');
      const [destinationMealType, destinationDayIndex] = destination.split('-');

      const recipe = state.planner[sourceDayIndex][sourceMealType];

      state.planner[sourceDayIndex][sourceMealType] = null;
      state.planner[destinationDayIndex][destinationMealType] = recipe;
    },
  },
});

export const { addRecipeToPlanner, toggleSidebar, moveRecipe } =
  recipesSlice.actions;
export default recipesSlice.reducer;
