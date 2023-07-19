/** @format */

import React, { useEffect, useState } from "react";
import "../css/FreeTrial.css";
import img from "../Images/Group 7893.png";
import img1 from "../Images/Ellipse 152.png";
import Mail from "../Images/Mail.png";
import Whatsapp from "../Images/Whatsapp.png";
import Location from "../Images/Location.png";
import axios from "axios";

const FreeTrial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const Trial = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://mr-hunny-goel-new-backend-main-ftv5.vercel.app/api/v1/company",
        { name, email, password, mobile, country, state }
      );
      alert("Account Created Successfully");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <>
      <div className="freeTrial">
        <div className="left">
          <h4>Do you know ?</h4>
          <p>
            The E- invoicing is made mandatory <br />
            for businesses with a turnover of ₹ <br /> 10 cr from OCT,2022{" "}
          </p>
          <img src={img} alt="" />
        </div>
        <div className="right">
          <p>Experience PREMIUM plans for 14 days</p>
          <form onSubmit={Trial}>
            <div>
              <img src={img1} alt="" />
              <input
                type={"text"}
                placeholder="Company name "
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <img src={Mail} alt="" />
              <input
                type={"email"}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <img src={Whatsapp} alt="" />
              <input
                type={"tel"}
                pattern="[0-9]{10}"
                placeholder="Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div>
              <img src={password} alt="" />
              <input
                type={"password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <img src={Location} alt="" />
              <input
                type={"text"}
                placeholder="India"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div>
              <img src={Location} alt="" />
              <input
                type={"text"}
                placeholder="Uttar Pradesh"
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", gap: "5%" }}>
              <input
                type="checkbox"
                style={{ width: "20px", marginTop: "5%" }}
              />
              <p style={{ fontSize: "1.3rem" }} className="agree">
                I agree to the terms of services & Privacy policy
              </p>
            </div>
            <button style={{ marginTop: "3%" }} type="submit">
              Create account{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FreeTrial;
