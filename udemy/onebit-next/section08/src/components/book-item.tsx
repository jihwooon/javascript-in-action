import Link from 'next/link';
import style from './book-item.module.css';
import { Books } from '@/models/book.model';
import Image from 'next/image';

export default function BookItem({ id, title, subTitle, description, author, publisher, coverImgUrl }: Books) {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <Image src={coverImgUrl} alt={`도서 ${title}의 표지 이미지`} width={80} height={105} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}