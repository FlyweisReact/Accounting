/** @format */

import React from "react";
import "./Banner.css";
// import img from "../../Images/image 4.png";
import img1 from "../../Images/Apple.png";
import img2 from "../../Images/PlayStore.png";

const   Banner = () => {
  return (
    <>
      <div className="banner">
        {/* <div className="image">
          <img src={img} alt="" />
        </div> */}
        <div className="twoImage">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
