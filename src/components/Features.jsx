import React from "react";

export const Features = () => {
  return (
    <section className="features">
      <div className="features-container align-elements">
        <h2 className="features-title">What you’ll get</h2>
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-item_image-wrapper">
              <img
                src="../assets/images/icon-whole-food-recipes.svg"
                alt=""
                width={23.195131301879883}
                height={32.120113372802734}
              />
            </div>
            <div className="feature-texts">
              <h4>Whole-food recipes</h4>
              <p>Each dish uses everyday, unprocessed ingredients.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-item_image-wrapper">
              <img
                src="../assets/images/icon-minimum-fuss.svg"
                alt=""
                width={40}
                height={41.66666793823242}
              />
            </div>
            <div className="feature-texts">
              <h4>Minimum fuss</h4>
              <p>
                All recipes are designed to make eating healthy quick and easy.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-item_image-wrapper">
              <img
                src="../assets/images/icon-search-in-seconds.svg"
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div className="feature-texts">
              <h4>Search in seconds</h4>
              <p>
                Filter by name or ingredient and jump straight to the recipe you
                need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
