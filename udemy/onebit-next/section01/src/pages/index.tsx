// CSS Module
import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css';
import { ReactNode } from 'react';
import BookItem from '@/components/book-item';
import { InferGetStaticPropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random';
import Head from "next/head"

export const getStaticProps = async () => {
  const [allBooks, randomBooks] = await Promise.all([
    await fetchBooks(),
    await fetchRandomBooks()
  ]);

  return {
    props: {
      allBooks,
      randomBooks
    },
    revalidate: 3,
  }
}

export default function Home({ allBooks,randomBooks }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>한입 북스</title>
        <meta property="og:image"
              content="/Users/jihwooon/Workspaces/js-in-action/onebit-next/section01/public/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요" />
      </Head>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {randomBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};