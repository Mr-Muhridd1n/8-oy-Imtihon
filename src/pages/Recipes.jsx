import React, { useState } from "react";
import { SelectButton } from "../components/SelectButton";
import { Searchbar } from "../components/Searchbar";
import { Hero } from "../components/recipes/Hero";
import { List } from "../components/recipes/List";
import { Footer } from "../components/Footer";

export const Recipes = () => {
  const [open, setOpen] = useState(false);
  const [openClock, setOpenClock] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectedClock, setSelectedClock] = useState([]);
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Hero />
      <div className="recipes-filter align-elements">
        <div className="select-button__wrapper">
          <SelectButton
            open={open}
            setOpen={setOpen}
            selected={selected}
            setSelected={setSelected}
            title="Max Prep Time"
            options={[
              { value: "0-min-prep", label: "0 minutes" },
              { value: "5-min-prep", label: "5 minutes" },
              { value: "10-min-prep", label: "10 minutes" },
            ]}
          />
          <SelectButton
            open={openClock}
            setOpen={setOpenClock}
            selected={selectedClock}
            setSelected={setSelectedClock}
            title="Max Cook Time"
            options={[
              { value: "0-min-cook", label: "0 minutes" },
              { value: "5-min-cook", label: "5 minutes" },
              { value: "10-min-cook", label: "10 minutes" },
              { value: "15-min-cook", label: "15 minutes" },
              { value: "20-min-cook", label: "20 minutes" },
            ]}
          />
        </div>
        <Searchbar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <List
        selected={selected}
        selectedClock={selectedClock}
        searchText={searchText}
      />
      <Footer />
    </>
  );
};
