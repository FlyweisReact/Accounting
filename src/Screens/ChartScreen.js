/** @format */

import React from "react";
import img from "../Images/bar.png";
import img1 from "../Images/bar2.png";
import warning from "../Images/warning.png";
import Chart from "../Images/Chart.png";
import bar from "../Images/chartbar1.png";
import bar2 from "../Images/chartbar2.png";
import bar3 from "../Images/chartbar3.png";

import Footer from '../Component/Footer/Footer'

const ChartScreen = () => {
  return (
    <>
      <div className="chart-two-sec">
        <div className="left">
          <p>Total Receivable amount </p>
          <img src={img} alt="" />
          <div className="double-two">
            <div>
              <p>Current</p>
              <p style={{ color: "#0B0B95", fontWeight: "600" }}>₹ 1,25,000</p>
            </div>
            <div>
              <p>Overdue </p>
              <p style={{ color: "#FF0000", fontWeight: "600" }}>₹ 85,000</p>
            </div>
          </div>
        </div>
        <div className="right">
          <p>Total Payable amount </p>
          <img src={img1} alt="" />
          <div className="double-two">
            <div>
              <p>Current</p>
              <p style={{ color: "#0B0B95", fontWeight: "600" }}>₹ 1,25,000</p>
            </div>
            <div>
              <p>Overdue </p>
              <p style={{ color: "#FF0000", fontWeight: "600" }}>₹ 85,000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="divider">
        <div>
          <p style={{ fontSize: "1.6rem", fontWeight: "600" }}>
            Business flow{" "}
          </p>{" "}
          <img src={warning} alt="" />
        </div>
        <div>
          <p style={{ fontSize: "1.4rem" }}> This fiscal year </p>
          <i class="fa-solid fa-caret-down" style={{ marginTop: "10px" }}></i>
        </div>
      </div>

      <div style={{ width: "90%", marginLeft: "5%" }}>
        <img src={Chart} alt="" style={{ width: "100%" }} />
      </div>

      <div className="chart-three-sec">
        <div>
          <p>Income & Expenses</p>
          <img src={bar} alt="" />
        </div>
        <div>
          <p>Your Top Expenses</p>
          <img src={bar2} alt="" />
        </div>
        <div>
          <p>Your Top Incomes </p>
          <img src={bar3} alt="" />
        </div>
      </div>

      <div className="threesec-two">
        <div className="left">
          <p>Projects </p>
          <img src={warning} alt="" />
        </div>

        <div className="mid">
          <div className="first"></div>
          <div className="two">
            <h6>Unbilled invoices </h6>
            <p>₹ 0.00 </p>
            <div></div>
            <h6>Unbilled expenses </h6>
            <p>₹ 0.00 </p>
          </div>
        </div>

        <div className="right">
          <p>Add projects to your watchlist +</p>
        </div>
      </div>


        <Footer />

    </>
  );
};

export default ChartScreen;
