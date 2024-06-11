import '@/assets/css/App.css'
import { CircularProgress, Grid } from "@mui/material";
import BooksList from '@/components/BooksList'
import SearchBar from '@/components/SearchBar';
import useBooks from '@/hooks/useBooks';
// import {AppBar} from '@mui/material';
function App() {
  const { loading, error, data, setSearch, search } = useBooks();

    if (loading) return <CircularProgress />;
    if (error) return <p>Error : {error.message}</p>;

  return (
    <Grid container spacing={2} minWidth={'90vw'}>
      <Grid item xs={12} sm={12} md={12} lg={12} key={"top-bar"}>
        <div className="my-4">
          <SearchBar setSearch={setSearch} search={search} />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} key={"app-container"}>
        <BooksList books={data.books} search={search} />
      </Grid>
    </Grid>
  );
}

export default App
