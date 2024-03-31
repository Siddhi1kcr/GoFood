import React from "react";
import { menu_list } from "../../assets/assets";
import './FoodSlider.css'

export default function FoodSlider() {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1 className="explore-menu-text">What's on your mind?</h1>
      <div className="explore-menu-list">
          {menu_list.map((item,index) => {
            return (
                <div key={index} className="explore-menu-list-item">
                  <img src={item.menu_img}/>
                  <p>{item.menu_name}</p>
                </div>
            )
          })}
      </div>
    </div>
  );
}


