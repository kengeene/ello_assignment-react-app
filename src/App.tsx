import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery, gql } from "@apollo/client";
import {
  Button,
  Card,
  CardMedia,
  Stack,
  Typography,
  Chip,
  CircularProgress,
  CardActionArea,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import {Book} from '@/types/index'
function App() {
  const GET_BOOKS = gql`
    query BooksQuery {
      books {
        coverPhotoURL
        author
        readingLevel
        title
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return <CircularProgress />;
    if (error) return <p>Error : {error.message}</p>;

  return (
    <>
    <div>

    </div>
      <Grid container spacing={4}>
        {data.books.length > 0 ? (
          data.books.map((book: Book) => (
            <Grid item xs={4}>
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
                  Share
                </Button>
              </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <p>No data</p>
        )}
      </Grid>
    </>
  );
}

export default App
