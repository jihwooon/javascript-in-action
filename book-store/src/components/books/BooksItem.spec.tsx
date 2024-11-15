import {getByAltText, render, screen} from "@testing-library/react";
import {Book} from "../../models/book.model";
import {BookStoreThemeProvider} from "../../context/themeContext";
import BooksItem from "./BooksItem";

const dummyBook: Book = {
    id: 1,
    title: "The Journey of Science",
    img: 507,
    category_id: 5,
    form: "Hardcover",
    isbn: "4df42c9cf363",
    summary: "A brief and intriguing summary of the book's content.",
    detail: "Detailed description providing more insights into the book's themes and narrative.",
    author: "Emma Jones",
    pages: 137,
    contents: "Table of contents with chapter titles and sections.",
    price: 41.35,
    likes: 609,
    pubDate: "2024-07-14"
}

describe('BookItem 컴포넌트 테스트', () => {
    it('렌더를 확인한다.', () => {
        const {getByText, getByAltText} = render(
            <BookStoreThemeProvider>
                <BooksItem book={dummyBook}/>
            </BookStoreThemeProvider>
        );

        expect(getByText(dummyBook.title)).toBeInTheDocument();
        expect(getByText(dummyBook.summary)).toBeInTheDocument();
        expect(getByText(dummyBook.author)).toBeInTheDocument();
        expect(getByText('41.35원')).toBeInTheDocument();
        expect(getByText(dummyBook.likes)).toBeInTheDocument();
        expect(getByAltText(dummyBook.title)).toHaveAttribute("src", `https://picsum.photos/id/${dummyBook.img}/300/300`)
    })
})
