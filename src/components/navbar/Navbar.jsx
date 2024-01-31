import Image from "next/image";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image src="/Logo.png" alt="" width={60} height={60} />
      <div className={styles.slogan}>Carena Nottoli</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
