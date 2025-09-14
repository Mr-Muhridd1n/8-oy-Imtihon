import React from "react";

import "../css/recipe.css";
import { Link, useParams } from "react-router-dom";
import { MoreRecipes } from "../components/recipes/MoreRecipes";
import { Footer } from "../components/Footer";
import { useDatabase } from "../hooks/useDatabase";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

export const Recipe = () => {
  const { id } = useParams("id");
  const { data, error, getData, isPending } = useDatabase();
  React.useEffect(() => {
    getData("/recipes");
  }, []);
  const recipe = data && data.filter((recipe) => recipe.id == id);

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      {recipe && recipe.length > 0 && (
        <>
          {" "}
          <section className="recipe">
            <p className="page-path align-elements">
              <Link to="/recipes">Recipe /</Link> <span>{recipe[0].title}</span>
            </p>
            <div className="recipe__container align-elements">
              <div className="recipe__image">
                <img src={`${recipe[0].image.large}`} alt={recipe[0].title} />
              </div>
              <div className="recipe__details">
                <h1 className="recipe__title">{recipe[0].title}</h1>
                <p className="recipe__overview">{recipe[0].overview}</p>
                <div className="recipe__resources">
                  <span>
                    <img src="../assets/images/icon-servings.svg" alt="" />
                    <p>Servings: {recipe[0].servings}</p>
                  </span>
                  <span>
                    <img src="../assets/images/icon-prep-time.svg" alt="" />
                    <p>Prep: {recipe[0].prepMinutes} mins</p>
                  </span>
                  <span>
                    <img src="../assets/images/icon-cook-time.svg" alt="" />
                    <p>Cook: {recipe[0].cookMinutes} min</p>
                  </span>
                </div>
                <div className="recipe__ingredients">
                  <h2>Ingredients:</h2>
                  <div className="recipe__list">
                    {recipe[0].ingredients.map((ingredient, index) => (
                      <div key={index} className="recipe__item">
                        <img
                          className="recipe__item__icon"
                          src="../assets/images/icon-bullet-point.svg"
                          alt=""
                        />
                        <div>
                          <p>{ingredient}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="recipe__instructions">
                  <h2>Instructions:</h2>
                  <div className="recipe__list">
                    {recipe[0].instructions.map((instruction, index) => (
                      <div key={index} className="recipe__item">
                        <img
                          className="recipe__item__icon"
                          src="../assets/images/icon-bullet-point.svg"
                          alt=""
                        />
                        <div>
                          <p>{instruction}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="section-divider"></div>
          <MoreRecipes recipes={data} />
          <div className="section-divider"></div>
        </>
      )}
      <Footer />
    </>
  );
};
