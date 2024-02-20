import Link from "next/link";
import styles from "./groupclass.module.css";
import Image from "next/image";

const GroupClass = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.slogan}>Group Classes</h1>
        <p className={styles.desc}>
          For interest in group classes please contact me for inquires.
        </p>
        <p className={styles.desc}>
          The availability for group classes is constantly changing.
        </p>
        <p className={styles.desc}>
          Classes fill up fast so you will want to get information on booking!{" "}
        </p>
        <Link href="/contact">
          <div>
            <button className={styles.button}>Contact</button>
          </div>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/weights.jpg"
          alt=""
          width={500}
          height={700}
          className={styles.logoFull}
        />
      </div>
    </div>
  );
};

export default GroupClass;
