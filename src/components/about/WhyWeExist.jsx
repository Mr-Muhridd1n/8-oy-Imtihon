import React from "react";

import styles from "../../css/WhyWeExist.module.css";

export const WhyWeExist = ({ title, datas }) => {
  return (
    <section className={styles.whyWeExist}>
      <div className={`${styles.whyWeExist__content} align-elements`}>
        <div className={styles.whyWeExist__title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.whyWeExist__main_content}>
          {datas.map(({ title, description }, index) => (
            <div key={index} className={styles.whyWeExist__item}>
              <img
                className={styles.whyWeExist__item__icon}
                src="../assets/images/icon-bullet-point.svg"
                alt=""
              />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
