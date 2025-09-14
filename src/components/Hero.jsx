import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <img
        className={styles["hero-pattern"]}
        src="./assets/images/pattern-squiggle-1.svg"
        alt=""
      />
      <div className={`${styles["hero-content"]} align-elements`}>
        <div className={styles["hero-texts"]}>
          <h1 className={styles["hero-title"]}>
            <span className={styles["hero-title-bg"]}>
              Healthy<span></span>
            </span>{" "}
            meals, zero fuss
          </h1>
          <p className={styles["hero-description"]}>
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
        </div>
        <Link to="/recipes" className={`${styles["hero-btn"]} btn`}>
          Start exploring
        </Link>
        <div className={styles["hero-img-container"]}>
          <picture>
            <source
              className={styles["hero-image"]}
              media="(min-width: 768px)"
              srcSet="./assets/images/image-home-hero-large.webp"
            />
            <source
              className={styles["hero-image"]}
              media="(min-width: 345.3px)"
              srcSet="./assets/images/image-home-hero-small.webp"
            />
            <img
              src="./assets/images/image-home-hero-small.webp"
              alt="A table with various healthy foods on it."
              className={styles["hero-image"]}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
