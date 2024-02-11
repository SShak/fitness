import Image from "next/image";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src="/Logo.png" alt="" width={60} height={60} />
      </Link>
      <Link href="/" className={styles.slogan}>
        <h1>Carena Nottoli</h1>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
