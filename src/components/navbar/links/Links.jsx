"use client";

import NavLink from "./navLinks/navLinks";
import styles from "./links.module.css";
import { useState } from "react";
import Image from "next/image";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Group Class",
    path: "/groupclass",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      <Image
        className={styles.menuButton}
        src="/Ham.svg"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
