/** @format */

import React, { useEffect } from "react";
import Banner from "../Component/Banner/Banner";
import Hero from "../Component/Hero/Hero";
import Navbar from "../Component/Navbar/Navbar";
import img from "../Images/image 6.png";
import img1 from "../Images/Ellipse 33.png";
import img2 from "../Images/Ellipse 34.png";
import img3 from "../Images/Ellipse 35.png";
import img4 from "../Images/Group 7826.svg";

import img6 from "../Images/image 7.png";
import img7 from "../Images/image 8.png";
import img8 from "../Images/image 9.png";
import img9 from "../Images/image 10.png";

import img10 from "../Images/image 11.png";
import Footer from "../Component/Footer/Footer";

const HomeScreen = () => {
 
  useEffect(() => {
    window.scrollTo( 0 ,0)
  })

  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <div className="two-sec">
        <img src={img} alt="" />
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic . Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic .
          </p>
          <p className="special">Know more about e-invoicing</p>
        </div>
      </div>

      <p
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "1%",
          fontWeight: "400",
          marginBottom: "1%",
        }}
      >
        Why choose us
      </p>

      <div className="elipse">
        <div>
          <img
            src={img1}
            alt=""
            style={{ width: "100px", marginTop: "10px", marginLeft: "20px" }}
          />
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            End to end accounting
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "300",
              textAlign: "center",
              padding: "10px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
        <div>
          <img
            src={img2}
            alt=""
            style={{ width: "100px", marginTop: "10px", marginLeft: "20px" }}
          />
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            GST compliance
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "300",
              textAlign: "center",
              padding: "10px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
        <div>
          <img
            src={img3}
            alt=""
            style={{ width: "100px", marginTop: "10px", marginLeft: "20px" }}
          />
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Integrated platform
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "300",
              textAlign: "center",
              padding: "10px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
      </div>
      <p
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "1%",
          fontWeight: "400",
          marginBottom: "1%",
        }}
      >
        Features at Glance
      </p>

      <div style={{ width: "100%" }}>
        <img src={img4} alt="" style={{ width: "100%" }} />
      </div>

      <p
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "3%",
          fontWeight: "400",
          marginBottom: "1%",
        }}
      >
        Here’s how we keep your business GST compliant
      </p>

      <div className="two-sec-new">
        <div className="left">
          <div>
            <img src={img6} alt="" />
          </div>
          <div>
            <p className="upper">GST treatment for items and contacts </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic .
            </p>
          </div>
        </div>
        <div className="right">
          <div>
            <img src={img7} alt="" />
          </div>
          <div>
            <p className="upper">E-way bills for consignment</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic .
            </p>
          </div>
        </div>
      </div>
      <div className="two-sec-new">
        <div className="left">
          <div>
            <img src={img8} alt="" />
          </div>
          <div>
            <p className="upper">E-way bills for consignment</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic .
            </p>
          </div>
        </div>
        <div className="right">
          <div>
            <img src={img9} alt="" />
          </div>
          <div>
            <p className="upper">On time return filling </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic .
            </p>
          </div>
        </div>
      </div>

      <p
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "3%",
          fontWeight: "400",
          marginBottom: "1%",
          color: "#4C68F5",
        }}
      >
        Learn more <i class="fa-solid fa-arrow-right"></i>
      </p>

      <p
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "3%",
          fontWeight: "400",
          marginBottom: "1%",
        }}
      >
        Our Most Affordable Plans
      </p>

      <div className="five-sec">
        <div>
          <p>Free</p>
          <hr style={{ border: "1px solid blue", width: "100px" }} />
          <img src={img10} alt="" />
          <br />
          <button>Start now</button>
        </div>
        <div>
          <p>Standard</p>
          <hr style={{ border: "1px solid blue", width: "100px" }} />
          <p style={{ marginTop: "5%", fontWeight: "bold" }}>₹ 700</p>
          <p style={{ marginTop: "5%" }}>/month billed annually</p>
          <br />
          <button>Start now</button>
        </div>
        <div>
          <p>Standard</p>
          <hr style={{ border: "1px solid blue", width: "100px" }} />
          <p style={{ marginTop: "5%", fontWeight: "bold" }}>₹ 700</p>
          <p style={{ marginTop: "5%" }}>/month billed annually</p>
          <br />
          <button>Start now</button>
        </div>
        <div>
          <p>Standard</p>
          <hr style={{ border: "1px solid blue", width: "100px" }} />
          <p style={{ marginTop: "5%", fontWeight: "bold" }}>₹ 700</p>
          <p style={{ marginTop: "5%" }}>/month billed annually</p>
          <br />
          <button>Start now</button>
        </div>
        <div>
          <p>Standard</p>
          <hr style={{ border: "1px solid blue", width: "100px" }} />
          <p style={{ marginTop: "5%", fontWeight: "bold" }}>₹ 700</p>
          <p style={{ marginTop: "5%" }}>/month billed annually</p>
          <br />
          <button>Start now</button>
        </div>
      </div>

      <p
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "3%",
          fontWeight: "400",
          marginBottom: "1%",
          color: "#4C68F5",
        }}
      >
        Learn more <i class="fa-solid fa-arrow-right"></i>
      </p>

      <div className="newBan">
        <p>SWITCH TO SMART ACCOUNTING SOFTWARE . SWITCH TO ACCCOUNTING  </p>
        <div>
          <button>Start my free trial </button>
          <button>Explore Demo Account </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomeScreen;
