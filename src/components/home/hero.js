import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/ivan.png"
          alt="An image showing Ivan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi!</h1>
      <p>I blog about web development - especially frontend frameworks</p>
    </section>
  );
}
