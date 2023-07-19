/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../Images/Ellipse 28.png";
import "./Hero.css";
import arrow from "../../Images/Arrow 1.png";
import img2 from "../../Images/Ellipse 29.png";
import img3 from "../../Images/Ellipse 30.png";
import img4 from "../../Images/Ellipse 31.png";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

const Hero = () => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState([]);
  const [supplier, setSupllier] = useState([]);
  const [sales, setSales] = useState([]);

  const getCustomer = async () => {
    try {
      const { data } = await axios.get(
        "https://mr-hunny-goel-new-backend-main-ftv5.vercel.app/api/v1/web/customer"
      );
      setCustomer(data);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };

  const getSupplier = async () => {
    try {
      const { data } = await axios.get(
        "https://mr-hunny-goel-new-backend-main-ftv5.vercel.app/api/v1/web/supplier"
      );
      setSupllier(data);
    } catch (err) {
      console.log(err);
    }
  };

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
    getCustomer();
    getSupplier();
    getSales();
  }, []);

  return (
    <>
      <div className="hero">
        <div className="first">
          <div>
            <p>
              Call us @ 9289080682 <br />
              <span style={{ fontSize: "1rem", fontWeight: "lighter" }}>
                Mon - Fri 9:00 AM - 7:00 PM
              </span>
            </p>
          </div>

          <div>
            <ul>
              <li>
                <Dropdown className="dropDownBtn">
                  <Dropdown.Toggle
                    variant="none"
                    id="dropdown-basic"
                    className="dropdownBtn-toggle"
                  >
                    Customers
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="dropdownBtn-Menu"
                    style={{ maxHeight: "600px", overflow: "scroll" }}
                  >
                    <div className="upperDiv">
                      <div>
                        <img
                          src={arrow}
                          alt=""
                          style={{ height: "10px", marginTop: "10px" }}
                        />
                      </div>
                      <p>Customer</p>
                      <p>+</p>
                    </div>

                    {customer?.details?.map((i, index) => (
                      <Dropdown.Item key={index}>
                        <div className="downDiv">
                          <div className="left">
                            <p> {i.firstname + " " + i.lastname} </p>
                            <div className="images">
                              <img src={img2} alt="" />
                              <img src={img3} alt="" />
                              <img src={img4} alt="" />
                            </div>
                          </div>

                          <div className="right">
                            <p>15-09-2022</p>
                          </div>
                        </div>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Dropdown className="dropDownBtn">
                  <Dropdown.Toggle
                    variant="none"
                    id="dropdown-basic"
                    className="dropdownBtn-toggle"
                  >
                    Suppliers
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="dropdownBtn-Menu"
                    style={{ maxHeight: "600px", overflow: "scroll" }}
                  >
                    <div className="upperDiv">
                      <div>
                        <img
                          src={arrow}
                          alt=""
                          style={{ height: "10px", marginTop: "10px" }}
                        />
                      </div>
                      <p>SUPPLIERS</p>
                      <p>+</p>
                    </div>
                    {supplier?.details?.map((i, index) => (
                      <Dropdown.Item key={index}>
                        <div className="supplierDiv">
                          <div className="up">
                            <div className="left">
                              {" "}
                              <img
                                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                                alt=""
                                style={{ width: "40px", height: "40px" }}
                              />
                              <p>{i.name} </p>
                            </div>
                            <div className="right">
                              <p>{i.date.slice(0, 10)} </p>
                            </div>
                          </div>
                          <div className="buttons">
                            <p
                              style={{
                                color: "#FF0000",
                                border: "1px solid #FF0000",
                                padding: "5px",
                                borderRadius: "4px",
                              }}
                            >
                              Due ₹{i.due}
                            </p>
                            <p
                              style={{
                                color: "#2784A0",
                                border: "1px solid #2784A0",
                                padding: "5px",
                                borderRadius: "4px",
                              }}
                            >
                              {" "}
                              <i
                                class="fa-solid fa-bell"
                                style={{ color: "#2784A0" }}
                              ></i>{" "}
                              Notify me{" "}
                            </p>
                          </div>
                        </div>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Dropdown className="dropDownBtn">
                  <Dropdown.Toggle
                    variant="none"
                    id="dropdown-basic"
                    className="dropdownBtn-toggle"
                  >
                    Sales
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="dropdownBtn-Menu"
                    style={{ maxHeight: "600px", overflow: "scroll" }}
                  >
                    <div className="upperDiv">
                      <div>
                        <img
                          src={arrow}
                          alt=""
                          style={{ height: "10px", marginTop: "10px" }}
                        />
                      </div>
                      <p>SALES QUOTES</p>
                      <p>+</p>
                    </div>

                    <div className="midDiv">
                      <p>All</p>
                      <p>Open</p>
                      <p>Order </p>
                      <p>Cancelled </p>
                      <p>Invoice</p>
                    </div>

                    {sales?.details?.map((i, index) => (
                      <Dropdown.Item key={index}>
                        <div className="SalesDiv">
                          <i class="fa-solid fa-ellipsis-vertical setting"></i>
                          <p style={{ fontSize: "18px", fontWeight: "400" }}>
                            {i.name}
                          </p>
                          <span
                            style={{
                              fontSize: "20px",
                              fontWeight: "600",
                              position: "absolute",
                              right: "40px",
                            }}
                          >
                            ₹{i.amount}
                          </span>
                          <br />
                          <span style={{ fontSize: "12px" }}>
                            Invoice no. : 1234500 <br />
                            {i.salesType}
                          </span>
                          <p
                            style={{
                              fontSize: "20px",
                              color: "red",
                              fontWeight: "400",
                              textAlign: "right",
                              marginRight: "30px",
                            }}
                          >
                            {i.status}
                          </p>
                        </div>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Dropdown className="dropDownBtn">
                  <Dropdown.Toggle
                    variant="none"
                    id="dropdown-basic"
                    className="dropdownBtn-toggle"
                  >
                    More
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="dropdownBtn-Menu"
                    style={{ width: "300px" }}
                  >
                    <div className="upperDiv">
                      <div>
                        <img
                          src={arrow}
                          alt=""
                          style={{ height: "10px", marginTop: "10px" }}
                        />
                      </div>
                      <p>MORE</p>
                      <p>+</p>
                    </div>

                    <Dropdown.Item>
                      <div
                        className="SalesDiv"
                        style={{ textAlign: "center", fontSize: "1.5rem" }}
                      >
                        Accountants
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <div
                        className="SalesDiv"
                        style={{ textAlign: "center", fontSize: "1.5rem" }}
                      >
                        Find Accountant
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <div
                        className="SalesDiv"
                        style={{ textAlign: "center", fontSize: "1.5rem" }}
                      >
                        Customers
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <img src={img} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="second">
          <div>
            <h1>
              OFFERING YOU ALL THE <br /> CONSULTING SERVICES YOUR <br />
              BUSINESS NEEDS
            </h1>
          </div>
          <div className="down">
            <button
              onClick={() => navigate("/trial")}
              style={{ cursor: "pointer" }}
            >
              Go for free trial
            </button>
            <button
              onClick={() => navigate("/chart")}
              style={{ cursor: "pointer" }}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
