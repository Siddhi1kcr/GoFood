import React ,{ useState } from "react";
import {menu_list } from "../../assets/assets";
import "./FoodSlider.css";
import backarrow from "../../images/back.png";
import arrow from "../../images/previous.png";

export default function FoodSlider() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const menu = menu_list.slice(scrollIndex, scrollIndex + 5);

  const handleNext = () => {
    if (scrollIndex < menu_list.length - 5) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };
  return (
    <div className="explore-menu" id="explore-menu">
      <h4 className="fs-4 d-flex  justify-content-center" id="textColor">
        OUR MENU
      </h4>
      <h1 className="explore-menu-text">What's on your mind?</h1>
      <div className="scroll-wrap">
        <img src={backarrow} className="back-arrow" alt="back" onClick={handlePrev} disabled={scrollIndex === 0}/>
        <div className="explore-menu-list">
          {menu.map((item, index) => {
            return (
              <div key={index} className="explore-menu-list-item">
                <img src={item.menu_img} loading="lazy" decoding="sync"/>
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <img src={arrow} className="arrow" alt="next" onClick={handleNext} disabled={scrollIndex >= menu_list.length - 5}/>
      </div>
    </div>
  );
}