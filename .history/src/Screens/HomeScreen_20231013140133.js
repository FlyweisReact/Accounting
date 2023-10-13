/** @format */

import React, { useEffect, useState } from "react";
import Banner from "../Component/Banner/Banner";
import Hero from "../Component/Hero/Hero";
import Navbar from "../Component/Navbar/Navbar";
import img1 from "../Images/Ellipse 33.png";
import img2 from "../Images/Ellipse 34.png";
import img3 from "../Images/Ellipse 35.png";
import img6 from "../Images/image 7.png";
import img7 from "../Images/image 8.png";
import img8 from "../Images/image 9.png";
import img9 from "../Images/image 10.png";
import Footer from "../Component/Footer/Footer";
import AboutUs from "../Component/AboutUs/AboutUs";
import { Modal } from "react-bootstrap";

const HomeScreen = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  function EndModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            End to End Accounting
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>"End-to-End Accounting" </strong>refers to the comprehensive
          process of recording, summarizing, and reporting financial
          transactions within an organization from start to finish. It
          encompasses all aspects of financial management and plays a crucial
          role in ensuring the accuracy, transparency, and compliance of an
          organization's financial activities. Here's a detailed breakdown of
          the content related to end-to-end accounting
          <br />
          <br />
          <strong>1. Introduction to Accounting:</strong>
          <ul>
            <li> Define accounting and its importance in business.</li>
            <li> Explain the role of accounting in decision-making. </li>
            <li>
              {" "}
              Differentiate between financial accounting and managerial
              accounting.
            </li>
          </ul>
          <strong>2. Accounting Principles and Standards:</strong>
          <ul>
            <li>
              {" "}
              Discuss generally accepted accounting principles (GAAP) and
              international financial reporting standards (IFRS).
            </li>
            <li>
              {" "}
              Explain how these standards ensure consistency and comparability
              in financial reporting.{" "}
            </li>
          </ul>
          <strong>3. The Accounting Cycle:</strong>
          <ul>
            <li>
              {" "}
              Discuss generally accepted accounting principles (GAAP) and
              international financial reporting standards (IFRS).
            </li>
            <li>
              {" "}
              Explain how these standards ensure consistency and comparability
              in financial reporting.{" "}
            </li>
          </ul>
          <strong>2. Accounting Principles and Standards:</strong>
          <ul>
            <li>
              {" "}
              Discuss generally accepted accounting principles (GAAP) and
              international financial reporting standards (IFRS).
            </li>
            <li>
              {" "}
              Explain how these standards ensure consistency and comparability
              in financial reporting.{" "}
            </li>
          </ul>
          <strong>2. Accounting Principles and Standards:</strong>
          <ul>
            <li>
              {" "}
              Discuss generally accepted accounting principles (GAAP) and
              international financial reporting standards (IFRS).
            </li>
            <li>
              {" "}
              Explain how these standards ensure consistency and comparability
              in financial reporting.{" "}
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <EndModal show={modalShow} onHide={() => setModalShow(false)} />
      <Navbar />
      <Hero />
      <Banner />
      <AboutUs />

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
            End-to-End Accounting" refers to the comprehensive process of
            recording, summarizing...{" "}
            <p
              style={{ color: "rgb(76, 104, 245) ", cursor: "pointer" }}
              onClick={() => setModalShow(true)}
            >
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </p>
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

      <div className="newBan">
        <p>SWITCH TO SMART ACCOUNTING SOFTWARE . SWITCH TO ACCCOUNTING </p>
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
