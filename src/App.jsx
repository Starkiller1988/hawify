import React from "react";
import styles from "../src/App.css";


function App() {
  return (
    <>

<img className="logo" src="../src/images/Logo.png" alt="" />


      <ul className="nav-list">
        <li className="cashbook">
          <a className="nav-item" href=''>Kassenbuch</a>
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
