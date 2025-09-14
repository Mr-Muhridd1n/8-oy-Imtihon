import React, { useEffect } from "react";
import { Item } from "./Item";
import { useDatabase } from "../../hooks/useDatabase";
import { Loading } from "../Loading";
import { Error } from "../Error";

export const List = ({ selected, selectedClock, searchText }) => {
  const { data, getData, isPending, error } = useDatabase();

  useEffect(() => {
    getData("/recipes");
  }, []);

  let prep = null;
  let clock = null;

  if (selected.length > 0) {
    prep = selected[0].split("-")[0];
  }

  if (selectedClock.length > 0) {
    clock = selectedClock[0].split("-")[0];
  }

  let filteredData = data;

  if (prep || clock || searchText) {
    filteredData = data.filter((recipe) => {
      const matchPrep = prep ? recipe.prepMinutes === Number(prep) : true;
      const matchClock = clock ? recipe.cookMinutes === Number(clock) : true;
      const matchSearch = recipe.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return matchPrep && matchClock && matchSearch;
    });
  }

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <section className="list">
      <div className="list__container align-elements">
        {data &&
          filteredData.map((recipe) => (
            <Item recipe={recipe} key={recipe.id} />
          ))}
      </div>
    </section>
  );
};
