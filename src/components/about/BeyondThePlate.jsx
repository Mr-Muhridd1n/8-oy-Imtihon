import React from "react";
import styles from "../../css/beyondThePlate.module.css";

export const BeyondThePlate = () => {
  return (
    <section className={styles.beyondThePlate}>
      <div className={`${styles.container} align-elements`}>
        <div className={styles.texts}>
          <h2 className={styles.title}>Beyond the plate</h2>
          <div className={styles.descriptions}>
            <p className={styles.description}>
              We believe food is a catalyst for community and well-being. By
              sharing approachable recipes, we hope to:
            </p>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                Encourage family dinners and social cooking.
              </li>
              <li className={styles.list_item}>
                Reduce reliance on single-use packaging and delivery waste.
              </li>
              <li className={styles.list_item}>
                Spark curiosity about seasonal produce and local agriculture.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.image_wrapper}>
          <img
            src="./assets/images/image-about-beyond-the-plate-large.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
