import styles from "./services.module.css";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.slogan}>
          4:13 Performance and Fitness strives to build the perfect version of
          you. Meaning, no one is built the same, nor completely perfect.
          However, we can build you a program that will get you to become the
          best you can be. These programs will leave you feeling proud of the
          athlete and healthy individual you become! Goals and Needs are
          specific, and unique, to every individual. We use these as our two key
          factors in writing the best programs specific to you.
        </h1>
        <p className={styles.desc}>
          Speed and Agility Training- Want to take your speed to the next level?
          The combination of speed and agility training improves our overall
          ability to move effectively and quickly in our prospective sports.
          What to expect in these sessions: 1) Sprint mechanics- Breakdown of
          running form and drill work. 2) Acceleration work- Reaction Timing and
          Top Speed training. Translating sprint mechanics into these fast
          bursts of speed. 3) Agility- Change in direction training,
          Coordination, and Foot Speed. 4) Workouts- Every workout will use
          aspects of Sprint Mechanics, Accelerations, and Agility all to improve
          Speed. a) Workout Examples include: Resistance training (Band Resisted
          Sprints, Hills, Sleds, Parachutes), Interval training (Varying
          distances at high intensity), Plyometrics Training (Explosive Power),
          Change in Direction training, Circuit training, etc. Strength and
          Power Training- Want to take your Strength and Power to the next
          level? Strength training not only makes you stronger, you can see
          improvements in your coordination, balance, proprioception, power,
          speed, and reduces injury risks. What to expect in these sessions: 1)
          Utilization of barbells- Standard and Hexbars. 2) Dumbbell exercises.
          3) Plyometric/Power exercises- Example: Box Jumps. 4) Core work. 5)
          Daily tracking of weights- Keep track of progress!
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

export default ServicesPage;
