import {
  Button,
  Card,
  CardMedia,
  Stack,
  Typography,
  Chip,
  CardActionArea,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import { Book } from "@/types/index";

export default function BooksList({books}: {books: Array<Book>}) {
  return (
    <Grid container spacing={4}>
      {books.length > 0 ? (
        books.map((book: Book, index: number) => (
          <Grid item xs={12} sm={4} md={4} lg={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src={`./${book.coverPhotoURL}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.author}
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap>
                    Level:
                    <Chip
                      size="small"
                      label={book.readingLevel}
                      color="success"
                    />
                  </Stack>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Add to reading list
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      ) : (
        <p>No data</p>
      )}
    </Grid>
  );
}
