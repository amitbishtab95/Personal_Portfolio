import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title} >
        It's Me
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        ></img>
        <ul
          className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" className={styles.roundLink}>About</a>
          </li>
          <li>
            <a href="#about" className={styles.roundLink}>Experience</a>
          </li>
          <li>
            <a href="#about" className={styles.roundLink}>Project</a>
          </li>
          <li>
            <a href="#about" className={styles.roundLink}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
