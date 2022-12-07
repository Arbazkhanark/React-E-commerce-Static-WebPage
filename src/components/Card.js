import React from 'react';
import "./css/slider.css";
import product1 from "./images/product1.png";
import product3 from "./images/product3.png";
import product2 from "./images/product2.png";
import product4 from "./images/product4.png";
import product5 from "./images/product5.png";
import product6 from "./images/product6.png";
import product7 from "./images/product7.png";
import product8 from "./images/product8.png";
import product9 from "./images/product9.png";
import product10 from "./images/product10.png";

export default function Card(props) {
  return (
    <>
    <h2 className="hea">{props.heading}</h2>
      <div className="cards">
        <div className="card">
          <img src={product1} alt=" " />
          <h2 className="productname">T-Shirt</h2>
          <h3 className="price">Price: 200</h3>
          <small>lorem ipsom dolor sit amet consectetur adisiscing elite.</small>
        </div>

        <div className="card">
          <img src={product2} alt=" " />
          <h2 className="productname">T-Shirt</h2>
          <h3 className="price">Price: 300</h3>
          <small>lorem ipsom dolor sit amet consectetur adisiscing elite.</small>
        </div>

        <div className="card">
          <img src={product3} alt=" " />
          <h2 className="productname">T-Shirt</h2>
          <h3 className="price">Price: 200</h3>
          <small>lorem ipsom dolor sit 4met consectetur adisiscing elite.</small>
        </div>

        <div className="card">
          <img src={product4} alt=" " />
          <h2 className="productname">T-Shirt</h2>
          <h3 className="price">Price: 200</h3>
          <small>lorem ipsom dolor sit amet consectetur adisiscing elite.</small>
        </div>

        <div className="card">
          <img src={product5} alt=" " />
          <h2 className="productname">T-Shirt</h2>
          <h3 className="price">Price: 500</h3>
          <small>lorem ipsom dolor sit amet consectetur adisiscing elite.</small>
        </div>


        <div className="card">
          <img src={product6} alt=" " />
          <h2 className="productname">T-Shirt</h2>
          <h3 className="price">Price: 700</h3>
          <small>lorem ipsom dolor sit amet consectetur adisiscing elite.</small>
        </div>


        <div className="card">
          <img src={product7} alt=" " />
          <h2 className="productname">T-Shirt</h2>
          <h3 className="price">Price: 800</h3>
          <small>lorem ipsom dolor sit amet consectetur adisiscing elite.</small>
        </div>


        <div className="card">
          <img src={product8} alt=" " />
          <h2 className="productname">T-Shirt</h2>
          <h3 className="price">Price: 300</h3>
          <small>lorem ipsom dolor sit amet consectetur adisiscing elite.</small>
        </div>


        <div className="card">
          <img src={product9} alt=" " />
          <h2 className="productname">T-Shirt</h2>
          <h3 className="price">Price: 400</h3>
          <small>lorem ipsom dolor sit amet consectetur adisiscing elite.</small>
        </div>


        <div className="card">
          <img src={product10} alt=" " />
          <h2 className="productname">T-Shirt</h2>
          <h3 className="price">Price: 400</h3>
          <small>lorem ipsom dolor sit amet consectetur adisiscing elite.</small>
        </div>
      </div>
    </>
  )
}
