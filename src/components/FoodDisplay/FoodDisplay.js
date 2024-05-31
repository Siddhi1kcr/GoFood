import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h4 className="fs-4 d-flex  justify-content-center" id="textColor">
        OUR TOP DISHES
      </h4>
      <h2 className="fs-1 d-flex  justify-content-center">
        Taste the Art of Perfection!
      </h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          return (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
