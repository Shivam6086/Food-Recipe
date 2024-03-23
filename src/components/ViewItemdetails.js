import React from "react";
import "./Style.css";

const ViewItemdetails = (props) => {
  const fooditem = props.fooditem;
  return (
    <>
      <div>
        <table>
          <thead></thead>
          <tbody>
            
            <tr>
              <td>Type of Cuisine</td>
              <td>
                {fooditem.cuisineType.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td>Nutrients</td>
              <td>
              <li>
                  {`${fooditem.totalNutrients.CHOCDF.label} = 
                  ${fooditem.totalNutrients.CHOCDF.quantity}
                  ${fooditem.totalNutrients.CHOCDF.unit}`}
                </li>
                <li>
                  {`${fooditem.totalNutrients.CHOLE.label} = 
                  ${fooditem.totalNutrients.CHOLE.quantity}
                  ${fooditem.totalNutrients.CHOLE.unit}`}
                </li>
              </td>
            </tr>
            <tr>
              <td>Yield</td>
              <td>
               {fooditem.yield}
              </td>
            </tr>
            <tr>
              <td>Type of Dish</td>
              <td>{fooditem.dishType.map((res) => res)}</td>
            </tr>
            <tr>
              <td>Ingredients Type</td>
              <td>
                {fooditem.ingredientLines.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td>Calorie's</td>
              <td>{fooditem.calories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewItemdetails;
