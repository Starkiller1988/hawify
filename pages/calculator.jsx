import { Link } from "react-router-dom";
import { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("hii");

  return (
    <>
      <Link to="/" className="start">
        Startseite
      </Link>

      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button>Clear</button>
          <button>C</button>
          <button>&divide;</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>&times;</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>&ndash;</button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
