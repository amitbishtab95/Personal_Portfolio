import styles from "./Introduction.module.css";
import { getImageUrl } from "../../utils";

export const Introduction = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amit</h1>
        <p className={styles.description}>Experienced Web Developer with 2.5+ years specializing in dynamic SPAs using Angular. Proficient in JavaScript, TypeScript, HTML, CSS, Bootstrap, and RxJS. Dedicated to crafting high-quality, user-centric websites with a focus on speed and optimal user experience.</p>
        <a href="mailto:abbisht.amit@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
