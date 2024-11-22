import {styled} from "styled-components";
import Title from "../components/common/Title";
import BooksFilter from "../components/books/BooksFilter";
import BooksList from "../components/books/BooksList";
import BooksEmpty from "../components/books/BooksEmpty";
import Pagination from "../components/books/Pagination";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import {useBooks} from "../hook/useBooks";

function Books() {
    const {books, pagination, isEmpty, isBooksLoading } = useBooks();

    return (
        <>
            <Title size="large">도서 검색 결과</Title>
            <BooksStyle>
                <div className="filter">
                    <BooksFilter/>
                    <BooksViewSwitcher/>
                </div>
                {!isEmpty && books && <BooksList books={books}/>}
                {isEmpty && <BooksEmpty/>}
                {!isEmpty && pagination &&  <Pagination pagination={pagination}/>}
            </BooksStyle>
        </>
    )
}

const BooksStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    .filter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
    }
`;

export default Books;
