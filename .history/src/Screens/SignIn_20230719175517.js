/** @format */

import React, { useState } from "react";
import "../css/SingIn.css";
import facebook from "../Images/facebook.png";
import google from "../Images/google.png";
import apple from "../Images/apple2.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate("");

  const SignIn = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://mr-hunny-goel-new-backend-main-ftv5.vercel.app/api/v1/users/login",
        { email }
      );
      alert(data.message);
      localStorage.setItem("Email", data.data.email);
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }
  };

  return (
    <>
      <div className="StartingDiv"></div>
      <div className="bigDiv">
        <div className="signInDiv">
          {/* <button>LOGO</button> */}
          <Link to="/">
            <img src={logo} alt="" style={{ width: "120px" }} />
          </Link>
          <p className="access">
            Sign in <br />
            to access us{" "}
          </p>
          <form onSubmit={SignIn}>
            <input
              type="text"
              placeholder="Email address or Mobile number "
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="signinBtn" type="submit">
              NEXT
            </button>
          </form>

          <Link to="/forgetPassword">
            <p className="forget">Forgot Password ?</p>
          </Link>
          <p style={{ textAlign: "center", fontSize: "1.2rem" }}>OR</p>
          <div>
            <div className="sing">
              <p>Sign in with</p>
            </div>
            <img src={facebook} alt="" />
            <img src={google} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
