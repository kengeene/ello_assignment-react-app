import './assets/css/App.css'
import {
  CircularProgress,
} from "@mui/material";
import BooksList from '@/components/BooksList'
import SearchBar from '@/components/SearchBar';
import useBooks from '@/hooks/useBooks';
import {AppBar} from '@mui/material';

function App() {
  const { loading, error, data, setSearch, search } = useBooks();

    if (loading) return <CircularProgress />;
    if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <AppBar position="static">
        <SearchBar setSearch={setSearch} search={search} />
      </AppBar>
      <div className="my-4"></div>
      <BooksList books={data.books} search={search} />
    </>
  );
}

export default App
