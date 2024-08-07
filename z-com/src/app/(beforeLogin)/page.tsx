import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import zLogo from "../../../public/zlogo.png";

export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요</h2>
        <Link href="/@modal/i/flow/signup" className={styles.signup}>
          <button>계정 만들기</button>
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          <button>로그인</button>
        </Link>
      </div>
    </>
  );
}
