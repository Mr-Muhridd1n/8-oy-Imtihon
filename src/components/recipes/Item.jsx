import React from "react";
import styles from "../../css/item.module.css";
import { Link } from "react-router-dom";

export const Item = ({ recipe }) => {
  const { id, title, image, overview, servings, prepMinutes, cookMinutes } =
    recipe;
  return (
    <div className={styles.item} key={id}>
      <div className={styles.item__container}>
        <div className={styles.image_wrapper}>
          <img className={styles.image} src={image.large} alt={title} />
        </div>
        <div className={styles.info}>
          <div className={styles.description_container}>
            <h2>{title}</h2>
            <p>{overview}</p>
          </div>
          <div className={styles.details_container}>
            <span>
              <img src="../assets/images/icon-servings.svg" alt="" />
              <p>Servings: {servings}</p>
            </span>
            <span>
              <img src="../assets/images/icon-prep-time.svg" alt="" />
              <p>Prep: {prepMinutes} mins</p>
            </span>
            <span>
              <img src="../assets/images/icon-cook-time.svg" alt="" />
              <p>Cook: {cookMinutes} min</p>
            </span>
          </div>
        </div>
      </div>
      <Link className={`${styles.link} btn`} to={`/recipe/${id}`}>
        View Recipe
      </Link>
    </div>
  );
};
