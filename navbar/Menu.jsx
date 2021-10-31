import { Link } from 'react-router-dom';


const Menu = () => {
    return(
       

        
       <div>

<img className="logo" src="../src/images/Logo.png" alt="" />

        <ul className="nav-list">
        <li className="cashbook">
          <Link to='/income' className="nav-item">Kassenbuch</Link>
        </li>
        <li className="shopping">
          <Link to='/shop' className="nav-item">Einkaufsliste</Link>
        </li>
        <li className="calculator">
          <Link to='/calculator' className="nav-item">Taschenrechner</Link>
        </li>
        <li className="todolist">
          <Link to='/todo' className="nav-item">To-Do Liste</Link>
        </li>
        <li className="aboutapp">
          <Link to='/about' className="nav-item">Über die App</Link>
        </li>
        </ul>
        </div> 
    )
}

export default Menu;