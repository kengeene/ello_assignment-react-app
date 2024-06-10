import {
  Grid,
} from "@mui/material";
import { Book } from "@/types/index";
import BookCard from "@/components/BookCard";

export default function BooksList({books}: {books: Array<Book>}) {
  return (
    <Grid container spacing={4}>
      {books.length > 0 ? (
        books.map((book: Book, index: number) => (
          <Grid item xs={12} sm={4} md={4} lg={4} key={index}>
            <BookCard book={book}/>
          </Grid>
        ))
      ) : (
        <p>No data</p>
      )}
    </Grid>
  );
}
