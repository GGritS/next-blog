import Image from "next/image";

import style from "./post-header.module.css";

export default function PostHeader({ title, image }) {
  return (
    <header className={style.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}
