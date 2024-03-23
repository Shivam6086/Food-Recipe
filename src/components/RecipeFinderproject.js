import React, { useState } from "react";
import RecipeitemList from "./RecipeitemList";
import "./Recipe.css";

const RecipeFinderproject = () => {
  const [result, setResult] = useState();
  const apiKeys = "815adc3523b41eb2feb0261466514389";
  const apiId = "a2d685b8";
  const [searchValue, setSearchValue] = useState("");

  const getApidetails = async () => {
    const getresponse = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${apiId}&app_key=${apiKeys}`
    );

    const datavalue = await getresponse.json();
    setResult(datavalue.hits);
    console.log(datavalue);
  };

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const Search = () => {
    if (searchValue.length === 0) {
      alert("Enter To Search");
      setResult();
    } else {
      getApidetails();
    }
  };
  const refreshAllItem = () => {
    if (searchValue.length === 0) {
      alert("Enter To Search");
      setResult();
    } else {
      getApidetails();
    }
  };
  return (
    <div className="container">
      <input type="text" onChange={searchHandler} placeholder="Enter to Search" />
      <button type="Submit" onClick={Search}>
        Find
      </button>
      <button
        type="button"
        onClick={refreshAllItem}
        style={{ marginLeft: "2rem" }}
      >
        Refresh page
      </button>
      {result && <RecipeitemList datavalue={result} />}
    </div>
  );
};

export default RecipeFinderproject;
