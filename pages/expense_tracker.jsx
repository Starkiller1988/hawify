import { Link } from "react-router-dom";
import React from "react";
import IMG1 from '../components/images/arrowwhite.png'

import ExpenseTracker from "../components/expense_tracker_components/ExpenseTracker";

function Expense() {
  return (
    <>
      <div className="content">

      <Link to="/" className="start">
        <img src={IMG1} alt="arrow" className="arrow"/>
      </Link>

        <ExpenseTracker />
      </div>
    </>
  );
}

export default Expense;
