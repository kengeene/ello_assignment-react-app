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

export default function BookCard({ book }: { book: Book }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={`../${book.coverPhotoURL}`}
          alt={book.title}
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
