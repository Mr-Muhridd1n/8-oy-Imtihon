import React from "react";

export const Searchbar = ({ searchText, setSearchText }) => {
  return (
    <form className="search-form" action="">
      <img src="../assets/images/icon-search.svg" alt="Search" />
      <input
        type="text"
        value={searchText}
        placeholder="Search by name or ingredient…"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};
