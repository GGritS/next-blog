import Image from "next/image";
import Link from "next/link";

import style from "./post-item.module.css";

export default function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;
  const formateDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={style.post}>
      <Link href={linkPath}>
        <div className={style.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={style.content}>
          <h3>{title}</h3>
          <time>{formateDate}</time>
          <p >{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
