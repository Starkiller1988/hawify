import { Link } from "react-router-dom";

const Expense = () => {
  return (
    <div className="expense">
      <Link to="/" className="start">
        Startseite
      </Link>

      <h2 className="text">This is the Expense Tracker Site!</h2>
    </div>
  );
};

export default Expense;
