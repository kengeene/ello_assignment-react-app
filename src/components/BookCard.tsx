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
} from "@mui/material";
import { Book } from "@/types/index";
import useBooks from "@/hooks/useBooks";
import { useRef } from "react";
export default  function BookCard({
  book,
}: {
  book: Book;
}) {
  const { addToReadingList, isBookSelected, removeFromReadingList } =
    useBooks();
    const buttonRef = useRef(null)
  function getImageUrl(coverPhotoURL: string) {
    return new URL(`../${coverPhotoURL}`, import.meta.url).href;
  }
  return (
    <Card
      className="flex flex-col items-center"
    >
      <CardActionArea>
        <CardContent className="flex flex-col items-center">
          <CardMedia
            component="img"
            src={getImageUrl(book.coverPhotoURL)}
            alt={book.title}
            sx={{
              width: 100,
            }}
          />
          <Typography gutterBottom variant="subtitle2" component="div" className="mt-2">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.author}
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap>
            Level:
            <Chip size="small" label={book.readingLevel} color="warning" />
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isBookSelected(book) ? (
          <Button
            size="small"
            color="secondary"
            variant="contained"
            onClick={() => removeFromReadingList(book)}
            ref={buttonRef}
          >
            Remove
          </Button>
        ) : (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => addToReadingList(book)}
            ref={buttonRef}
          >
            Add to reading list
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
