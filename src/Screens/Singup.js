/** @format */

import React, { useState } from "react";
import "../css/SingIn.css";
// import facebook from "../Images/facebook.png";
// import google from "../Images/google.png";
// import apple from "../Images/apple2.png";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import { toast } from "react-toastify";

const Singup = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [email, setEmail] = useState(null);
  const [ password,setPassword ] = useState(null)

  const SignUp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://mr-hunny-goel-new-backend-main-ftv5.vercel.app/api/v1/users/signup",
        { email , password }
      );
      toast.success("Profile Created !")
      navigate("/signIn");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  // Otp Verify
  function MyVerticallyCenteredModal(props) {
    const [otp, setOtp] = useState("");

    const Verifyotp = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://mr-hunny-goel-new-backend-main-ftv5.vercel.app/api/v1/web/verify",
          { otp }
        );
        alert(data.message);
        props.onHide();
        navigate("/signIn");
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Verify Email Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={Verifyotp}>
            <Form.Group className="mb-3">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
            <Button
              type="submit"
              style={{
                backgroundColor: "#407bff",
                borderRadius: "0",
                width: "200px",
              }}
            >
              Verify
            </Button>{" "}
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="StartingDiv"></div>
      <div className="bigDiv">
        <div className="signInDiv">
          {" "}
          <Link to="/">
            <img src={logo} alt="" style={{ width: "120px" }} />
          </Link>
          <p className="access">
            Sign Up now <br />
            to access us{" "}
          </p>
          <form onSubmit={SignUp}>
            <input
              type="email"
              required
              placeholder="Enter your  Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your  Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="signinBtn" type="submit">
              NEXT
            </button>
          </form>
          {/* <p
            style={{ textAlign: "center", fontSize: "1.2rem", marginTop: "2%" }}
          >
            OR
          </p>
          <div>
            <div className="sing">
              <p>Sign up with</p>
            </div>
            <img src={facebook} alt="" />
            <img src={google} alt="" />
            <img src={apple} alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Singup;
