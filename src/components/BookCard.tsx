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

export default  function BookCard({ book }: { book: Book }) {
    function getImageUrl(coverPhotoURL: string) {
      return new URL(`../${coverPhotoURL}`, import.meta.url).href;
    }
  return (
    <Card sx={{ maxWidth: 200, height: 300 }}>
      <CardActionArea>
        <CardContent>
          <CardMedia
            component="img"
            src={getImageUrl(book.coverPhotoURL)}
            alt={book.title}
            sx={{
              width: 100,
            }}
          />
          <Typography gutterBottom variant="h7" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.author}
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap>
            Level:
            <Chip size="small" label={book.readingLevel} color="success" />
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to reading list
        </Button>
      </CardActions>
    </Card>
  );
}
