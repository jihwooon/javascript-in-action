import './globals.css';
import Link from 'next/link';
import style from './layout.module.css';
import { Books } from '@/models/book.model';

async function Footer() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    return <footer>제목 @winterlood</footer>;
  }

  const books: Books[] = await response.json();
  const bookCount = books.length;

  return (
    <footer>
      <div>제작 @winterload</div>
      <div>총 {bookCount}가 등록되어 있습니다.</div>
    </footer>
  );
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={'/'}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
        {modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}