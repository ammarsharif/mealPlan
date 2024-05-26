import { createSlice } from '@reduxjs/toolkit';
import cookieImage from '../../assets/images/cookie.jpeg';
import muffinsImage from '../../assets/images/muffins.jpeg';
import pastaImage from '../../assets/images/pasta.jpeg';
import cakeImage from '../../assets/images/cake.jpeg';
import pancakeImage from '../../assets/images/pancake.png';
import bhindiImage from '../../assets/images/bhindi.jpeg';
import biryaniImage from '../../assets/images/biryani.jpeg';
import waffleImage from '../../assets/images/waffle.jpeg';
import daalImage from '../../assets/images/daal.jpeg';
import chickenImage from '../../assets/images/chicken.jpeg';
import eggsImage from '../../assets/images/eggs.jpeg';
import paneerImage from '../../assets/images/paneer.jpeg';
import coffeeImage from '../../assets/images/coffee.jpeg';

const initialState = {
  recipes: [
    {
      id: 1,
      title: 'Delicious Breakfast Cookies Recipe',
      image: cookieImage,
      duration: '15 mins',
    },
    {
      id: 13,
      title: 'Fresh Morning Coffee Delight',
      image: coffeeImage,
      duration: '10 mins',
    },
    {
      id: 2,
      title: 'One Pot Creamy Cajun Pasta',
      image: pastaImage,
      duration: '30 mins',
    },
    {
      id: 3,
      title: 'Tasty Cranberry Orange Muffins',
      image: muffinsImage,
      duration: '20 mins',
    },
    {
      id: 4,
      title: 'Special Cake for Celebrations',
      image: cakeImage,
      duration: '45 mins',
    },
    {
      id: 5,
      title: 'Fluffy Pancakes with Syrup',
      image: pancakeImage,
      duration: '20 mins',
    },
    {
      id: 6,
      title: 'Spicy Bhindi Masala Delight',
      image: bhindiImage,
      duration: '25 mins',
    },
    {
      id: 7,
      title: 'Authentic Chicken Biryani Recipe',
      image: biryaniImage,
      duration: '60 mins',
    },
    {
      id: 8,
      title: 'Belgian Waffles with Berries',
      image: waffleImage,
      duration: '30 mins',
    },
    {
      id: 9,
      title: 'Classic Daal Tadka Delight',
      image: daalImage,
      duration: '40 mins',
    },
    {
      id: 10,
      title: 'Spicy Tandoori Chicken Recipe',
      image: chickenImage,
      duration: '50 mins',
    },
    {
      id: 11,
      title: 'Creamy Scrambled Eggs Delight',
      image: eggsImage,
      duration: '15 mins',
    },
    {
      id: 12,
      title: 'Paneer Tikka Masala Recipe',
      image: paneerImage,
      duration: '35 mins',
    },
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


export const { addRecipeToPlanner, toggleSidebar, moveRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
