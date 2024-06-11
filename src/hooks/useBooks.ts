import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, BooksState } from "@/store/booksReducer";
import { Book } from "@/types";

export default function useBooks() {
  const dispatch = useDispatch();
  const selectedBooks = useSelector(
    (state: { books: BooksState }) => state.books.selectedBooks
  );

  const addToReadingList = (book: Book)=> {
    dispatch(addBook(book))
  }

  const GET_BOOKS = gql`
    query BooksQuery {
      books {
        coverPhotoURL
        author
        readingLevel
        title
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_BOOKS);

  const [search, setSearch] = useState('')

  return {
    loading,
    error,
    data,
    search,
    setSearch,
    selectedBooks,
    addToReadingList,
  };
}
