import '@/assets/css/App.css'
import {
  CircularProgress,
  Badge,
  Grid,
  Modal,
} from "@mui/material";
import BooksList from '@/components/BooksList'
import SearchBar from '@/components/SearchBar';
import useBooks from '@/hooks/useBooks';
// import {AppBar} from '@mui/material';
import ReadingListTable from '@/components/ReadingListTable';
// import MailIcon from "@mui/icons-material/Mail";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import useModal from '@/hooks/useModal';

function App() {
  const {
    loading,
    error,
    data,
    setSearch,
    search,
    selectedBooks,
  } = useBooks();
  const { open, handleOpen, handleClose } = useModal();

    if (loading) return <CircularProgress />;
    if (error) return <p>Error : {error.message}</p>;

  const gridWidth = 12

  return (
    <Grid container zeroMinWidth spacing={4}>
      {/* Badge & modal component */}
      <Grid item xs={gridWidth} sm={gridWidth} md={gridWidth} lg={gridWidth} className="text-right my-4">
        <Badge
          badgeContent={`${selectedBooks.length}`}
          color="secondary"
          className="hover:cursor-pointer"
          onClick={handleOpen}
        >
          <LocalLibraryIcon color="primary" />
        </Badge>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ReadingListTable readingList={selectedBooks} />
        </Modal>
      </Grid>
      {/* Searchbar component */}
      <Grid
        item
        xs={gridWidth}
        sm={gridWidth}
        md={gridWidth}
        lg={gridWidth}
        key={"top-bar"}
        className="my-4"
      >
        <SearchBar setSearch={setSearch} search={search} />{" "}
      </Grid>
      {/* Bookslist & Pagination component */}
      <Grid
        item
        xs={gridWidth}
        sm={gridWidth}
        md={gridWidth}
        lg={gridWidth}
        key={"app-container"}
        className="my-4"
      >
        <BooksList books={data.books} search={search} />
      </Grid>
    </Grid>
  );
}

export default App
