import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../components/calculator_components/calculator.css";
import IMG1 from "../components/images/arrowwhite.png";

const operators = ["+", "-", "/", "*", "."];

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    if (operators.includes(e.target.name) && result.endsWith(e.target.name)) {
      return;
    } 

    if (result.endsWith(operators) && operators.includes(e.target.name)) {
      return;
    }

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
      setResult;
    }
  };

  return (
    <>
      <div className="cont">
        <Link to="/" className="start">
          <img src={IMG1} alt="arrow" className="arrow" />
        </Link>

        <div className="title_calculator">Taschenrechner</div>
        <form>
          <input type="text" defaultValue={result} className="input_calculate" />
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
    </>
  );
};

export default Calculator;
