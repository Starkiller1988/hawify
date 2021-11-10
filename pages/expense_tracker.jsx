import { Link } from "react-router-dom";
import Video from '../components/Videos/Backgroundmovie.mp4'
import React from 'react'


const Expense = () => {
  return (
    <div className="expense">

<video className="bkvideo" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>

      <Link to="/" className="start">
        Startseite
      </Link>

      <div className="content">

<button></button>

      </div>

    </div>
  );
};

export default Expense;
