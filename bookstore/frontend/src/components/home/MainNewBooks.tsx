import { Book } from '@/models/book.model';
import styled from 'styled-components';
import BooksItem from '../books/BooksItem';

interface Props {
  books: Book[];
}

const MainNewBooks = ({ books }: Props) => {
  return (
    <MainNewBooksStyle>
      {books.map((book) => (
        <BooksItem key={book.id} book={book} view="grid" />
      ))}
    </MainNewBooksStyle>
  );
};

const MainNewBooksStyle = styled.div`
  display: flex;
  grid-template-columns: repeat(4, 1fr);
`;

export default MainNewBooks;
