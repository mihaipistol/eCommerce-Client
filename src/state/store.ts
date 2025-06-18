import { configureStore } from '@reduxjs/toolkit';
import { config } from './../config';
import commentsReducer from './slices/comments';
import productReducer from './slices/product';
import productsReducer from './slices/products';
import searchReducer from './slices/search';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    product: productReducer,
    products: productsReducer,
    search: searchReducer
  },
  devTools: config?.DEV !== undefined ? config.DEV : false
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
