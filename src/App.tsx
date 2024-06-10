import './assets/css/App.css'
import {
  CircularProgress,
} from "@mui/material";
import BooksList from '@/components/BooksList'
import SearchBar from '@/components/SearchBar';
import useBooks from '@/hooks/useBooks';

function App() {
  const { loading, error, data } = useBooks();

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
