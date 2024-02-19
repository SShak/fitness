import styles from "./groupclass.module.css";
import Image from "next/image";

const GroupClass = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.slogan}>
          Adult Fitness- Overall Health and Wellness Training
        </h1>
        <p className={styles.desc}>
          1hr HIIT Training: High intensity total body training including a
          combination of strength, cardio, and core exercises. Why is HIIT
          training beneficial? This intense form of exercise strives to push
          your muscles to the maximum. Meaning, this is a great form of training
          to reduce body fat, increase your heart rate, and improve both
          strength and cardiovascular fitness{" "}
        </p>
        <p className={styles.desc}>
          1hr Strength Training: Total body strength training utilizing
          dumbbells, barbells, medicine balls, resistance bands, etc. Why is
          Strength training beneficial? Yes, strength training makes you
          stronger. As adults, it is important that we work on our muscles and
          joints. Not only that, but strength training builds bone density,
          assists weight loss, builds muscle mass, and muscle tone.{" "}
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
