import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

export default function useBooks() {
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
  };
}
