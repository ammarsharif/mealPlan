import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import recipesReducer from '../features/recipes/recipesSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, recipesReducer);

export const store = configureStore({
  reducer: {
    recipes: persistedReducer,
  },
});

export const persistor = persistStore(store);
