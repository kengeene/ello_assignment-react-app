import './assets/css/App.css'
import { useQuery, gql } from "@apollo/client";
import {
  CircularProgress,
} from "@mui/material";
import BooksList from '@/components/BooksList'
import SearchBar from '@/components/SearchBar';


function App() {
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

    if (loading) return <CircularProgress />;
    if (error) return <p>Error : {error.message}</p>;



  return (
    <>
      <div className="my-4">
       <SearchBar/>
      </div>
     <BooksList books={data.books}/>
    </>
  );
}

export default App
