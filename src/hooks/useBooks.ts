import { useQuery, gql } from "@apollo/client";

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

  return {
    loading,
    error,
    data,
  };
}
