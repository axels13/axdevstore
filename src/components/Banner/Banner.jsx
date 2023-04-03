import React from "react";
import "./Banner.css";
import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <main className="banner_container">
      <div className="banner__content">
        <img src={banner} alt="" className="banner__img" />
      </div>

      <div className="banner__text">
        <div>
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore
            itaque recusandae consequuntur quisquam neque quaerat porro
            molestias cupiditate sunt.
          </p>
        </div>
        <div className="banner__btn">
          <button className="first">READ MORE</button>
          <button className="second">SHOP NOW</button>
        </div>
      </div>
    </main>
  );
};

export default Banner;
