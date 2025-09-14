import React from "react";
import styles from "../../css/RecipesHero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.hero__container} align-elements`}>
        <h1>Explore our simple, healthy recipes</h1>
        <p>
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </div>
    </section>
  );
};
