import React from "react";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section className="cta">
      <div className="align-elements">
        <div className="cta__container ">
          <div className="cta-icon cta-icon-left">
            <img src="./assets/images/pattern-fork.svg" alt="" />
          </div>
          <div className="cta-icon cta-icon-right">
            <img src="./assets/images/pattern-knife.svg" alt="" />
          </div>
          <h2 className="cta-title">Ready to cook smarter?</h2>
          <p className="cta-subtitle">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <Link to="/recipes">
            <button className="cta-button btn">Browse recipes</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
