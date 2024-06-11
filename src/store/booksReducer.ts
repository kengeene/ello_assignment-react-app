import { Book } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BooksState {
  books: Book[];
  selectedBooks: Book[];
}

const initialState: BooksState = {
  books: [],
  selectedBooks: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.selectedBooks.push(action.payload);
    },
    removeBook(state, action: PayloadAction<Book>) {
      state.selectedBooks = state.books.filter(
        (book: Book) => book.id !== action.payload.id
      );
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
