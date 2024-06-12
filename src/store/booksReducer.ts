import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {BooksState, Book} from '@/types/index'


const initialState: BooksState = {
  books: [],
  selectedBooks: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      // Only add book if it doesn't exist
      if (
        state.selectedBooks.findIndex((x) => x.id === action.payload.id) === -1
      )
        state.selectedBooks.push(action.payload);
    },
    removeBook(state, action: PayloadAction<Book>) {
      state.selectedBooks = state.selectedBooks.filter((book) => action.payload.id !==  book.id);
  }
}
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
