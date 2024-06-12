export type Book = {
  coverPhotoURL: string;
  author: string;
  readingLevel: string;
  title: string;
  id: number
};

export interface BooksState {
  books: Book[];
  selectedBooks: Book[];
}