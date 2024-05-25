import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [
    { id: 1, title: 'Coffee Coconut Breakfast Cookies', image: '/images/cookies.jpg', duration: '15 mins' },
    { id: 2, title: 'One Pot Creamy Cajun Pasta', image: '/images/pasta.jpg', duration: '30 mins' },
    { id: 3, title: 'Cranberry Orange Muffins', image: '/images/muffins.jpg', duration: '20 mins' },
  ],
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
  },
});

export const { addRecipeToPlanner, toggleSidebar } = recipesSlice.actions;
export default recipesSlice.reducer;
