import {render, screen} from "@testing-library/react"
import {BookStoreThemeProvider} from "../../context/themeContext";
import InputText from "./InputText";
import React from "react";

describe('InputText 컴포넌트 테스트', () => {
    it('렌더를 확인한다.', () => {
        render(
            <BookStoreThemeProvider>
                <InputText placeholder="여기에 입력해주세요"/>
            </BookStoreThemeProvider>
        )

        expect(screen.getByPlaceholderText("여기에 입력해주세요")).toBeInTheDocument();
    })

    it('forwardRef 테스트', () => {
        const ref = React.createRef<HTMLInputElement>()
        render(
            <BookStoreThemeProvider>
                <InputText placeholder="여기에 입력해주세요" ref={ref}/>
            </BookStoreThemeProvider>
        )

        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    })
})