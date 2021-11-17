import { Link } from "react-router-dom";
import IMG1 from '../components/images/balance.png'
import IMG2 from '../components/images/calculator.png'
import IMG3 from '../components/images/question.png'
import IMG5 from '../components/images/shoppingbag.png'
import IMG6 from '../components/images/checklist.png'
import IMG7 from '../components/images/logo2.png'
import IMG8 from '../components/images/globe.png'


const Menu = () => {
  return (
    <>
      <div className="content">

<img className="logopng" src={IMG7} alt="" />
<div className="apptitle"><h1 className="titel">HAWI.FY</h1></div>

        <ul className="nav-list">
          <li className="cashbook">
            <Link to="/expense_tracker" className="nav-item">
             <img className="icons" src={IMG1}/> <h1>Kassenbuch</h1>
            </Link>
          </li>
          <li className="shopping">
            <Link to="/shop" className="nav-item">
            <img className="icons" src={IMG5}/> <h1>Einkaufsliste</h1>
            </Link>
          </li>
          <li className="calculator">
            <Link to="/calculator" className="nav-item">
            <img className="icons" src={IMG2}/> <h1>Rechner</h1>
            </Link>
          </li>
          <li className="todolist">
            <Link to="/todo" className="nav-item">
            <div id="img-container">
              <img className="icons" src={IMG6}/></div>
              <h1>To-Do Liste</h1>
            </Link>
          </li>
          <li className="aboutapp">
            <Link to="/about" className="nav-item">
            <img className="icons" src={IMG3}/> <h1>Über die App</h1>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
