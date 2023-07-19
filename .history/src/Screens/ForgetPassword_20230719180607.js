/** @format */

import axios from "axios";
import React, { useState } from "react";
import "../css/SingIn.css";
import { Alert  , Modal} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [ email   , setEmail ] = useState(null)
  const [ modalShow , setModalShow ] = useState(false)
  const navigate = useNavigate();

  const Resetpassword = async (e) => {
    e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://mr-hunny-goel-new-backend-main-ftv5.vercel.app/api/v1/user/forget",
          {
            email,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(data.msg)
        setModalShow(true)
      } catch (e) {
        console.log(e);
      }
    } 
  };

  function MyVerticallyCenteredModal(props) {
    const [otp, setOtp] = useState("");
    const [ password  , setPassword ] = useState(null)

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
              type="email"
              placeholder="Enter Your Register Email"
              onChange={(e) => setEmail(e.target.value)}
              ret
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
