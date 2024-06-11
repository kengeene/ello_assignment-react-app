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
    readingList
  } = useBooks();
  const { open, handleOpen, handleClose } = useModal();

    if (loading) return <CircularProgress />;
    if (error) return <p>Error : {error.message}</p>;

  return (
    <Grid container spacing={2} minWidth={"90vw"}>
      <Grid item xs={12} sm={12} md={12} lg={12} className="text-right">
        <Badge
          badgeContent={readingList.length}
          color="warning"
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
          <ReadingListTable readingList={readingList} />
        </Modal>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} key={"top-bar"}>
        <div className="my-4">
          <SearchBar setSearch={setSearch} search={search} />{" "}
        </div>
      </Grid>
      <Grid></Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} key={"app-container"}>
        <BooksList books={data.books} search={search} />
      </Grid>
    </Grid>
  );
}

export default App
