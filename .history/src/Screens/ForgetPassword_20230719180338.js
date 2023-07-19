/** @format */

import axios from "axios";
import React, { useState } from "react";
import "../css/SingIn.css";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const Resetpassword = async (e) => {
    e.preventDefault();
    if (confirmPassword === password) {
      try {
        const { data } = await axios.post(
          "",
          {
            password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        alert("Password is Reset");
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="StartingDiv"></div>
      <div className="bigDiv">
        <div className="signInDiv">
          <button>LOGO</button>
          <p className="access">Reset Password</p>
          {error ? (
            <Alert variant="danger" style={{ margin: "0" }}>
              {" "}
              Password and Confirm Password do not match
            </Alert>
          ) : (
            ""
          )}

          <form onSubmit={Resetpassword}>
            <input
              type="text"
              placeholder="Confirmation Code"
              onChange={(e) => setToken(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="signinBtn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
