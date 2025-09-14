import React from "react";
import { Item } from "./Item";

export const MoreRecipes = ({ recipes }) => {
  const filteredData = [...recipes].sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <section className="more-recipes">
      <div className="more-recipes__container align-elements">
        <h2 className="more-recipes__title">More Recipes</h2>
        <div className="list__container">
          {filteredData.map((recipe) => (
            <Item recipe={recipe} key={recipe.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
