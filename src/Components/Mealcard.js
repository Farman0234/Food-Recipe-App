import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

function Mealcard({ detail }) {
  console.log(detail);
  return (
    <div className="meals">
      {!detail
        ? "Data Not Found 🤦‍♂️😃"
        : detail.map((curItem) => {
            return (
              <div className="mealImg">
                <img src={curItem.strMealThumb} alt={curItem.strMeal} />
                <p>{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  <button>Show Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
}

export default Mealcard;
