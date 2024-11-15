import {Book} from "../../models/book.model";
import BooksItem from "./BooksItem";
import {styled} from "styled-components";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {QUERYSTRING} from "../../constants/querystring";
import {ViewMode} from "./BooksViewSwitcher";

interface Props {
    books: Book[]
}

function BooksList({books}: Props) {
    const [view, setView] = useState<ViewMode>("grid")
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get(QUERYSTRING.VIEW)) {
            setView(params.get(QUERYSTRING.VIEW) as ViewMode)
        }
    }, [location.search])

    return (
        <BookListStyle view={view}>
            {
                books?.map((book) => (
                    <BooksItem key={book.id} book={book} view={view}></BooksItem>
                ))
            }
        </BookListStyle>
    )
}

export interface BooksListStyleProps {
    view: ViewMode;
}

const BookListStyle = styled.div<BooksListStyleProps>`
    display: grid;
    grid-template-columns: ${({view}) => (view === "grid" ? "repeat(4, 1fr)" : "repeat(1, 1fr)")}
    gap: 24px;
`

export default BooksList;
