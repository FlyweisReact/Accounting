/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChartScreen from "./Screens/ChartScreen";
import FreeTrial from "./Screens/FreeTrial";
import HomeScreen from "./Screens/HomeScreen";
import SignIn from "./Screens/SignIn";
import Singup from "./Screens/Singup";
import "./index.css";
import Mail from "./Screens/Mail";
import ForgetPassword from "./Screens/ForgetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/trial" element={<FreeTrial />} />
          <Route path="/chart" element={<ChartScreen />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
