import styles from "./groupclass.module.css";
import Image from "next/image";

const GroupClass = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.slogan}>Group Classes</h1>
        <p className={styles.desc}>
          For interest in group classes blah blah blah contact me below{" "}
        </p>
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
