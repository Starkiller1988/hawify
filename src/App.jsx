import React, { Component } from "react";
import Footer from "../header&footer/footer/footer";
import styles from "../src/App.css";
import Logo from "./images/Hawify.gif";

function App() {
  return (
    <>
<div>
  <img src="./images/Hawify.gif" alt="" />
</div>

      <ul className="nav-list">
        <li className="cashbook">
          <a className="nav-item">Kassenbuch</a>
        </li>
        <li className="shopping">
          <a className="nav-item">Shopping-List</a>
        </li>
        <li className="calculator">
          <a className="nav-item">Taschenrechner</a>
        </li>
        <li className="calendar">
          <a className="nav-item">Kalender</a>
        </li>
        <li className="aboutapp">
          <a className="nav-item">Über HAWI.FY</a>
        </li>
      </ul>
    </>
  );
}

export default App;
