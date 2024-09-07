import BookItem from '@/components/book-item';
import style from './page.module.css';
import { Books } from '@/models/book.model';

async function AllBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {
    cache: 'no-store',
  });
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const allBooks: Books[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function RecoBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`);
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const recoBooks: Books[] = await response.json();

  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default async function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}