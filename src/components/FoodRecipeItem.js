import React, { useState } from "react";
import "./Recipe.css";
import ViewItemdetails from "./ViewItemdetails";
const RecipeItemdtls = (props) => {
  const [ritems, setItems] = useState();
  const ritem = props.data;
  const ViewItemdetail = () => {
    if (ritems) {
      setItems();
    } else {
      setItems(ritem);
    }
  };
  return (
    <>
      <div className="ViewItemdetails">
        <img src={ritem.image} alt="Img" />
        <p>{ritem.label}</p>
        <button type="button" onClick={ViewItemdetail}>
          View
        </button>
      </div>
      {ritems && <ViewItemdetails item={ritems} />}
    </>
  );
};

export default RecipeItemdtls;
