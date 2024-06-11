import { Grid, Typography } from "@mui/material";
import { Book } from "@/types/index";
import BookCard from "@/components/BookCard";
import { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";

export default function BooksList({
  books,
  search,
}: {
  books: Array<Book>;
  search: string;
}) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_: () => void, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const [searchResults, setSearchResults] = useState<Array<Book>>([]);

  useEffect(() => {
    setSearchResults(
      books.filter((results) =>
        results.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, books]);

  const filteredResults = searchResults.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <Grid container spacing={3} minHeight={"70vh"}>
        {filteredResults.length > 0 ? (
          filteredResults.map((book: Book, index: number) => (
            <Grid item xs={12} sm={3} md={3} lg={3} key={index}>
              <BookCard book={book} />
            </Grid>
          ))
        ) : (
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              No data
            </Typography>
          </Grid>
        )}
      </Grid>
      <TablePagination
        component="div"
        count={searchResults.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ color: "var(--color-3)" }}
      />
    </>
  );
}
