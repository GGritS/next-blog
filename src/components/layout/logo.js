import Link from "next/link";
import style from "./logo.module.css";

export default function Logo() {
  return (
    <div className={style.logo}>
      <Link href="/">Ivan`s blog</Link>
    </div>
  );
}
