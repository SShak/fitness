import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.slogan}>Build the Perfect Version of YOU!</h1>
        <p className={styles.desc}>
          4:13 Performance and Fitness strives to build the perfect version of
          you. Meaning, no one is built the same, nor completely perfect.
          However, we can build you a program that will get you to become the
          best you can be.
        </p>
        <p className={styles.desc}>
          These programs will leave you feeling proud of the athlete and healthy
          individual you become! Goals and Needs are specific, and unique, to
          every individual. We use these as our two key factors in writing the
          best programs specific to you
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/logoFull.png"
          alt=""
          width={850}
          height={650}
          className={styles.logoFull}
        />
      </div>
    </div>
  );
};

export default Home;
