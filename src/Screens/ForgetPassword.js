/** @format */

import axios from "axios";
import React, { useState } from "react";
import "../css/SingIn.css";
import {  Modal, Form, Button } from "react-bootstrap";
import { useNavigate ,Link } from "react-router-dom";
import { toast } from "react-toastify";

import logo from "../Images/logo.png";

const ForgetPassword = () => {
  const [email, setEmail] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const Resetpassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://mr-hunny-goel-new-backend-main-ftv5.vercel.app/api/v1/user/forget",
        {
          email,
        }
      );
      toast.success(data.msg);
      setModalShow(true);
    } catch (e) {
      console.log(e);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState(null);

    const Verifyotp = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://mr-hunny-goel-new-backend-main-ftv5.vercel.app/api/v1/user/reset",
          { otp, password, email }
        );
        toast.success(data.message);
        props.onHide();
        navigate("/signIn");
      } catch (err) {
        toast.error(err.response.data.message);
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
            Reset Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={Verifyotp}>
            <Form.Group className="mb-3">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="number"
                required
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
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
        <Link to="/">
            <img src={logo} alt="" style={{ width: "120px" }} />
          </Link>
          <p className="access">Reset Password</p>

          <form onSubmit={Resetpassword}>
            <input
              type="email"
              placeholder="Enter Your Register Email"
              onChange={(e) => setEmail(e.target.value)}
              required
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
