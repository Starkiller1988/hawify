import { Link } from "react-router-dom";
import { useState } from "react";
import Styles from "../pages/calculator.css";
import Video from "../components/Videos/Backgroundmovie.mp4";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="body_calculator">



      <Link to="/" className="start">
        Startseite
      </Link>

      <video className="bkvideo" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>

      <div className="content">

      <div className="title_calculator">Taschenrechner</div>


        <div className="container">
        
        <form>
          <input type="text" value={result} className="input_calculate" />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button className="highlight" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick} className="btn_calc">
            7
          </button>
          <button name="8" onClick={handleClick} className="btn_calc">
            8
          </button>
          <button name="9" onClick={handleClick} className="btn_calc">
            9
          </button>
          <button className="highlight" name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick} className="btn_calc">
            4
          </button>
          <button name="5" onClick={handleClick} className="btn_calc">
            5
          </button>
          <button name="6" onClick={handleClick} className="btn_calc">
            6
          </button>
          <button className="highlight" name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick} className="btn_calc">
            1
          </button>
          <button name="2" onClick={handleClick} className="btn_calc">
            2
          </button>
          <button name="3" onClick={handleClick} className="btn_calc">
            3
          </button>
          <button className="highlight" name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick} className="btn_calc">
            0
          </button>
          <button className="highlight" name="." onClick={handleClick}>
            .
          </button>
          <button className="highlight" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Calculator;
