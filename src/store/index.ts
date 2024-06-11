import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '@/store/booksReducer';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
