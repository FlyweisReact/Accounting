/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import arrow from "../../Images/Arrow 1.png";
import logo from "../../Images/logo1.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("Email");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [sales, setSales] = useState([]);

  const getSales = async () => {
    try {
      const { data } = await axios.get(
        "https://mr-hunny-goel-new-backend-main-ftv5.vercel.app/api/v1/admin/sales/all"
      );
      setSales(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSales();
  }, []);
  return (
    <>
      <div className="header">
        <div className="mid">
          <img src={logo} alt="logo" className="LogoImage" />
          <ul>
            <li onClick={() => navigate("/")}>Home </li>
            <a href="#aboutUs" style={{ textDecoration: "none" }}>
              <li>About Us</li>
            </a>
            <a href="#footer" style={{ textDecoration: "none" }}>
            <li>Contact Us</li>
            </a>
           
          </ul>
        </div>
        <div className="right">
          {userEmail ? (
            <>
              <button
                style={{
                  color: "#0B0B95",
                  border: "1px solid white",
                  width: "100px",
                }}
                onClick={() => {
                  localStorage.removeItem("Email");
                  alert("Log-out Successfully");
                  navigate("/signin");
                }}
              >
                Log Out <i class="fa-solid fa-right-from-bracket"></i>
              </button>
            </>
          ) : (
            <>
              <button
                style={{
                  color: "#0B0B95",
                  border: "1px solid white",
                  width: "100px",
                }}
                onClick={() => navigate("/signIn")}
              >
                LOGIN
              </button>
              <button
                style={{
                  backgroundColor: "#FF0000",
                  color: "#fff",
                  border: "1px solid #FF0000",
                }}
                onClick={() => navigate("/singup")}
              >
                SIGNUP NOW
              </button>
            </>
          )}
        </div>
        <div className="sidebar">
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
        </div>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ width: "300px", color: "#fff", backgroundColor: "#3749d5" }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <i
              class="fa-solid fa-x"
              style={{ position: "absolute", right: "10px", cursor: "pointer" }}
              onClick={() => handleClose()}
            ></i>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebarMenu">
            <ul>
              <li>Inventory</li>
              <li>Mail</li>
              <li>Project</li>
              <li>All Products</li>
              {userEmail ? (
                <li>
                  <button
                    style={{
                      color: "#0B0B95",
                      border: "1px solid white",
                    }}
                    onClick={() => {
                      localStorage.removeItem("Email");
                      toast.success("Log-out Successfully");
                      navigate("/signin");
                    }}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <button
                      style={{
                        color: "#0B0B95",
                        border: "1px solid white",
                      }}
                      onClick={() => navigate("/signIn")}
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      style={{
                        backgroundColor: "#FF0000",
                        color: "#fff",
                        border: "1px solid #FF0000",
                      }}
                      onClick={() => navigate("/singup")}
                    >
                      Signup
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
