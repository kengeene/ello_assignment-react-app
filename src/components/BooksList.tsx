import {
  Grid,
} from "@mui/material";
import { Book } from "@/types/index";
import BookCard from "@/components/BookCard";
import { useState } from "react";
import TablePagination from "@mui/material/TablePagination";

export default function BooksList({books}: {books: Array<Book>}) {
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (_: ()=> void,newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const filteredResults = books.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );


  return (
    <>
      <Grid container spacing={4}>
        {filteredResults.length > 0 ? (
          filteredResults.map((book: Book, index: number) => (
            <Grid item xs={12} sm={4} md={4} lg={4} key={index}>
              <BookCard book={book} />
            </Grid>
          ))
        ) : (
          <p>No data</p>
        )}
      </Grid>
      <TablePagination
        component="div"
        count={books.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
