import { Link } from "react-router-dom";

const ShoppingList = () => {
  return (
    <div className="shop">
      <Link to="/" className="start">
        Startseite
      </Link>

      <h2 className="text">This is the Shopping Site!</h2>
    </div>
  );
};

export default ShoppingList;
