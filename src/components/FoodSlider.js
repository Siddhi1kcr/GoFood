import React from "react";
import {Link} from "react-router-dom"
import biryani from "../images/biryani.svg"
import burger from "../images/burger.svg"
import cake from "../images/cake.svg"
import desserts from "../images/desserts.svg"
import icecream from "../images/ice-Cream.svg"
import milkshake from "../images/milkshake.svg"
import momos from "../images/momos.svg"
import northindian from "../images/north-indian.svg"
import pizza from "../images/pizza.svg"
import starters from "../images/starters.svg"
import sweets from "../images/sweets.svg"
import southindian from "../images/south-indian.svg"
import arrows from "../icons/arrows.svg"

export default function FoodSlider() {

    // console.log("hello");
    // window.addEventListener('DOMContentLoaded', (event) => {
    // let multipleCardCarousel = document.querySelector("#carouselExampleCaptions");
    // if (window.matchMedia("(min-width: 768px)").matches) {
    // let carousel = new bootstrap.Carousel(multipleCardCarousel, { interval: false, wrap: false,});
    // let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
    // let cardWidth = document.querySelector(".carousel-item").offsetWidth;
    // let scrollPosition = 0;
    // console.log(carouselWidth);
    // console.log(cardWidth);
    
    // document.querySelector("#carouselExampleCaptions .carousel-control-next").addEventListener("click", function() {
    // if (scrollPosition < carouselWidth - cardWidth * 4) {
    // scrollPosition += cardWidth;
    // document.querySelector("#carouselExampleCaptions .carousel-inner").scroll({ left: scrollPosition, behavior: "smooth" });
    // }
    // });
    
    // document.querySelector("#carouselExampleCaptions .carousel-control-prev").addEventListener("click", function() {
    // if (scrollPosition > 0) {
    // scrollPosition -= cardWidth;
    // document.querySelector("#carouselExampleCaptions .carousel-inner").scroll({ left: scrollPosition, behavior: "smooth" });
    // }
    // });
    // } else {
    // multipleCardCarousel.classList.add("slide");
    // }
    // });

  return (
    <div>
      <div  className="mx-auto">
      <h2 >What's on your mind?</h2>
      </div>
      <div id="carouselExampleControls" className ="carousel">
        <div className ="carousel-inner">
          <div className ="carousel-item active">
            <div className ="cards">
              <div className ="img-wrapper">
                <img src={biryani} className ="d-flex w-100" alt="food" />{" "}
              </div>
              <div className ="card-body">
                <h5 className ="card-title">Biryani</h5>
                <Link href="#" className ="btn btn-primary">
                   See more <img id="arrows" src={arrows} alt="arrow"/>
                </Link>
              </div>
            </div>
          </div>
          <div className ="carousel-item">
            <div className ="cards">
              <div className ="img-wrapper">
                <img src={burger} className ="d-flex w-100" alt="food" />{" "}
              </div>
              <div className ="card-body">
                <h5 className ="card-title">Burger</h5>
                <Link href="#" className ="btn btn-primary">
                     See more <img id="arrows" src={arrows} alt="arrow"/>
                </Link>
              </div>
            </div>
          </div>
          <div className ="carousel-item">
            <div className ="cards">
              <div className ="img-wrapper">
                <img src={cake} className ="d-flex w-100" alt="food" />{" "}
              </div>
              <div className ="card-body">
                <h5 className ="card-title">Cakes</h5>
                <Link href="#" className ="btn btn-primary">
                     See more <img id="arrows" src={arrows} alt="arrow"/>
                </Link>
              </div>
            </div>
          </div>
          <div className ="carousel-item">
            <div className ="cards">
              <div className ="img-wrapper">
                <img src={desserts} className ="d-flex w-100" alt="food" />{" "}
              </div>
              <div className ="card-body">
                <h5 className ="card-title">Desserts</h5>
                <Link href="#" className ="btn btn-primary">
                     See more <img id="arrows" src={arrows} alt="arrow"/>
                </Link>
              </div>
            </div>
          </div>
          <div className ="carousel-item">
            <div className ="cards">
              <div className ="img-wrapper">
                <img src={icecream} className ="d-flex w-100" alt="food" />{" "}
              </div>
              <div className ="card-body">
                <h5 className ="card-title">Ice-Cream</h5>
                <Link href="#" className ="btn btn-primary">
                     See more <img id="arrows" src={arrows} alt="arrow"/>
                </Link>
              </div>
            </div>
          </div>
          <div className ="carousel-item">
            <div className ="cards">
              <div className ="img-wrapper">
                <img src={milkshake} className ="d-flex w-100" alt="food" />{" "}
              </div>
              <div className ="card-body">
                <h5 className ="card-title">Milkshake</h5>
                <Link href="#" className ="btn btn-primary">
                     See more <img id="arrows" src={arrows} alt="arrow"/>
                </Link>
              </div>
            </div>
          </div>
          <div className ="carousel-item">
            <div className ="cards">
              <div className ="img-wrapper">
                <img src={momos} className ="d-flex w-100" alt="food" />{" "}
              </div>
              <div className ="card-body">
                <h5 className ="card-title">Momos</h5>
                <Link href="#" className ="btn btn-primary">
                     See more <img id="arrows" src={arrows} alt="arrow"/>
                </Link>
              </div>
            </div>
          </div>
          <div className ="carousel-item">
            <div className ="cards">
              <div className ="img-wrapper">
                <img src={northindian} className ="d-flex w-100" alt="food" />{" "}
              </div>
              <div className ="card-body">
                <h5 className ="card-title">North Indian</h5>
                <Link href="#" className ="btn btn-primary">
                     See more <img id="arrows" src={arrows} alt="arrow"/>
                </Link>
              </div>
            </div>
          </div>
          <div className ="carousel-item">
            <div className ="cards">
              <div className ="img-wrapper">
                <img src={pizza} className ="d-flex w-100" alt="food" />{" "}
              </div>
              <div className ="card-body">
                <h5 className ="card-title">Pizza</h5>
                <Link href="#" className ="btn btn-primary">
                     See more <img id="arrows" src={arrows} alt="arrow"/>
                </Link>
              </div>
            </div>
          </div>
          <div className ="carousel-item">
            <div className ="cards">
              <div className ="img-wrapper">
                <img src={southindian} className ="d-flex w-100" alt="food" />{" "}
              </div>
              <div className ="card-body">
                <h5 className ="card-title">South Indian</h5>
                <Link href="#" className ="btn btn-primary">
                     See more <img id="arrows" src={arrows} alt="arrow"/>
                </Link>
              </div>
            </div>
          </div>
          <div className ="carousel-item">
            <div className ="cards">
              <div className ="img-wrapper">
                <img src={starters} className ="d-flex w-100" alt="food" />{" "}
              </div>
              <div className ="card-body">
                <h5 className ="card-title">Starters</h5>
                <Link href="#" className ="btn btn-primary">
                     See more <img id="arrows" src={arrows} alt="arrow"/>
                </Link>
              </div>
            </div>
          </div>
          <div className ="carousel-item">
            <div className ="cards">
              <div className ="img-wrapper">
                <img src={sweets} className ="d-flex w-100" alt="food" />{" "}
              </div>
              <div className ="card-body">
                <h5 className ="card-title">Sweets</h5>
                <Link href="#" className ="btn btn-primary">
                     See more <img id="arrows" src={arrows} alt="arrow"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button
          className ="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className ="visually-hidden">Previous</span>
        </button>
        <button
          className ="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className ="carousel-control-next-icon" aria-hidden="true"></span>
          <span className ="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}


