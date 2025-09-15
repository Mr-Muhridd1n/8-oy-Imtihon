import React from "react";

export const RealLife = () => {
  return (
    <section className="real_life">
      <div className="real_life__container align-elements">
        <div className="real_life__texts">
          <h2 className="real_life__title">Built for real life</h2>
          <p className="real_life__description">
            Cooking shouldn’t be complicated. These recipes come in under{" "}
            <span className="active">
              30 minutes <span></span>
            </span>{" "}
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p className="real_life__description">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </p>
        </div>
        <div className="real_life__images">
          <picture>
            <source
              className="real_life__image"
              media="(min-width: 768px)"
              srcSet="./assets/images/image-home-real-life-large.webp"
            />
            <source
              className="real_life__image"
              media="(min-width: 345.3px)"
              srcSet="./assets/images/image-home-real-life-small.webp"
            />
            <img
              src="./assets/images/image-home-real-life-small.webp"
              alt="A table with various healthy foods on it."
              className="real_life__image"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
