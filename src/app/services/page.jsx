import styles from "./services.module.css";

const ServicesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.slogan}>
          4:13 Performance and Fitness strives to build the perfect version of
          you. Meaning, no one is built the same, nor completely perfect.
          However, we can build you a program that will get you to become the
          best you can be.
        </h1>
        <h1 className={styles.slogan}>
          These programs will leave you feeling proud of the athlete and healthy
          individual you become! Goals and Needs are specific, and unique, to
          every individual. We use these as our two key factors in writing the
          best programs specific to you.
        </h1>
        <p className={styles.desc}>
          <b>Speed and Agility Training-</b> Want to take your speed to the next
          level? The combination of speed and agility training improves our
          overall ability to move effectively and quickly in our prospective
          sports.
        </p>
        <p className={styles.desc}>What to expect in these sessions:</p>
        <p className={styles.desc}>
          {" "}
          1) <b>Sprint mechanics-</b> Breakdown of running form and drill work.
        </p>
        <p className={styles.desc}>
          2) <b> Acceleration work-</b> Reaction Timing and Top Speed training.
          Translating sprint mechanics into these fast bursts of speed.
        </p>
        <p className={styles.desc}>
          3) <b> Agility-</b> Change in direction training, Coordination, and
          Foot Speed.
        </p>
        <p className={styles.desc}>
          4) <b> Workouts-</b> Every workout will use aspects of Sprint
          Mechanics, Accelerations, and Agility all to improve Speed.
        </p>
        <p className={styles.desc}>Workout Examples include:</p> Resistance
        training (Band Resisted Sprints, Hills, Sleds, Parachutes), Interval
        training (Varying distances at high intensity), Plyometrics Training
        (Explosive Power), Change in Direction training, Circuit training, etc.
        <p className={styles.desc}>
          Strength and Power Training- Want to take your Strength and Power to
          the next level?
        </p>
        Strength training not only makes you stronger, you can see improvements
        in your coordination, balance, proprioception, power, speed, and reduces
        injury risks. What to expect in these sessions: 1) Utilization of
        barbells- Standard and Hexbars. 2) Dumbbell exercises. 3)
        Plyometric/Power exercises- Example: Box Jumps. 4) Core work. 5) Daily
        tracking of weights- Keep track of progress!
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
    </div>
  );
};

export default ServicesPage;
