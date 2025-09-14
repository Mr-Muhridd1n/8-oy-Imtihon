import React from "react";
import styles from "../../css/HeroAbout.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.hero__container} align-elements`}>
        <div className={styles.hero__content}>
          <h3 className={styles.hero__title}>Our mission</h3>
          <h2 className={styles.hero__subtitle}>
            Help more people cook nourishing meals, more often.
          </h2>
          <div className={styles.hero__descriptions}>
            <p>
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p>
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
        </div>
        <div className={styles.hero__image_wrapper}>
          <img
            className={styles.hero__image}
            src="./assets/images/image-about-our-mission-large.webp"
            alt=""
          />
          <img
            className={styles.hero__image_shape}
            src="./assets/images/pattern-squiggle-2.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
