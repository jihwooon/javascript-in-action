import style from './global-layout.module.css'
import Link from 'next/link';

export default function GlobalLayout ({children} : { children: React.ReactNode}) {
  return <div className={style.container}>
    <header className={style.header}>
      <Link href={'/'}>ONEBITE BOOKS</Link>
    </header>
    <main className={style.main}>{children}</main>
    <footer className={style.footer}>제작 @winterload</footer>
  </div>
}