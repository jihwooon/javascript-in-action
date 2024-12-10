import BookItem from "@/components/book-item";
import style from "./page.module.css";
import {BookData} from "@/types";
import {Suspense} from "react";
import {delay} from "@/util/delay";

// export const dynamic = "auto";
// 1. auto
// 2. force-dynamic
// 3. force-static
// 4. error

export const dynamic = "force-dynamic";

async function AllBooks() {
    await delay(3000)
    const response = await fetch(`http://localhost:12345/book`, {
        cache: "force-cache"
    });
    if (!response.ok) {
        return <div>오류가 발생했습니다.</div>
    }

    const allBooks: BookData[] = await response.json();

    return (
        <div>
            {allBooks.map((book) => (
                <BookItem key={book.id} {...book} />
            ))}
        </div>
    )
}

async function RecoBooks() {
    await delay(1500)
    const response = await fetch(`http://localhost:12345/book/random`, {
        next: { revalidate: 3}
    });

    const randomBooks: BookData[] = await response.json();

    return (
        <div>
            {
                randomBooks.map((book) => (
                    <BookItem key={book.id} {...book} />
                ))
            }
        </div>
    )
}

export default function Home() {

    return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
          <Suspense fallback={<div>RecoBooks....</div>}>
              <RecoBooks />
          </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
          <Suspense fallback={<div>AllBooks...</div>}>
              <AllBooks />
          </Suspense>
      </section>
    </div>
  );
}
