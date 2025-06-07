import { configureStore } from '@reduxjs/toolkit';
import { config } from '~/config';
import commentsReducer from '~/state/slices/comments';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
  devTools: config?.DEV !== undefined ? config.DEV : false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
