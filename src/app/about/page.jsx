import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.slogan}>
          {" "}
          My Name is Carena Nottoli and I am the Personal Trainer running 4:13
          Performance and Fitness.{" "}
        </h1>
        <p className={styles.desc}>
          For as long as I can remember, sports and movement have been a part of
          my life. From these vast experiences, I have been a part of many
          training types and many styles of coaching. Through every experience,
          I have always felt a passion to teach others the values of movement.
        </p>
        <p className={styles.desc}>
          At the age of 8 years old began Gymnastics. I competed at a
          competitive level for 7 years winning multiple State Titles in the
          individual events as well as the all-around. After I decided to leave
          competitive gymnastics, I began Track and Field. I started off
          strictly as a sprinter running the 4x100m relay, 100m dash, and 200m
          dash. I was able to make it to all of the postseason meets in all of
          the sprint events, ran times in my high school&apos;s top 10 lists,
          and still have a school record standing in the 4x100m relay set my
          senior year in 2018. After a year of sprinting we decided to give Pole
          Vault a try. Bringing back my gymnastics body awareness gave me the
          ability to catch onto the event easily. I was able to make it to
          postseason meets in the Pole Vault every year after I started, jump
          school record marks, and was the PIAA State Champion in 2017.
        </p>
        <p className={styles.desc}>
          In 2017, I committed to Penn State University to pursue my degree in
          Kinesiology (Applied Exercise and Health), a minor in Special
          Education, as well as an athletic career as a Pole Vaulter/Sprinter on
          the Track and Field team. After starting in the Fall of 2018, I was a
          part of the B1G Conference Championship travel squad, 2 time B1G
          scorer, and NCAA Qualifier to round out my 5 year career. Being
          immersed in high level training on the track while taking care of my
          own body, alongside learning about training others and taking care of
          them in the classroom, was truly one of the greatest blessings for my
          career. Not only was I learning how to train elite athletes, but I was
          learning how to train every individual with all kinds of needs. This
          experience led me to two internship opportunities in which I was able
          to work with every population with many styles of training. After 5
          years with Penn State, I was able to graduate in the Spring of 2023
          with my Bachelor&apos;s Degree in Kinesiology.
        </p>
        <p className={styles.desc}>
          After Graduation, I hit the ground running with personal training and
          team training. 4:13 Performance and Fitness stands for becoming the
          perfect version of you. The phrase “build the perfect version of you”
          inspires me. Meaning no one is perfect, but we can build you up by
          utilizing your motivators, needs, strengths, weaknesses, and most
          importantly keeping your own goals at the forefront. Not everyone can
          be trained the exact same. Throughout my experiences as an athlete and
          coach, the best experiences come from what will make YOU great. Let’s
          find your why and build that perfect version of YOU!{" "}
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/about.jpg"
          alt=""
          width={628}
          height={926.067}
          className={styles.logoFull}
        />
      </div>
    </div>
  );
};

export default AboutPage;
