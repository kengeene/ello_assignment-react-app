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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

 const handleChangePage = (
   _event: React.MouseEvent<HTMLButtonElement> | null,
   newPage: number
 ) => {
   setPage(newPage);
 };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value));
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
      <Grid
        container
        spacing={4}
        minHeight={"70vh"}
        columns={10}
        className="flex justify-center"
      >
        {filteredResults.length > 0 ? (
          filteredResults.map((book: Book, index: number) => (
            <Grid item xs={12} sm={3} md={2} lg={2} key={index}>
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
