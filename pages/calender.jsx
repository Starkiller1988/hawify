import { Link } from "react-router-dom";

const ToDoList = () => {
  return (
    <div className="todo">
      <Link to="/" className="start">
        Startseite
      </Link>

      <input
        type="form"
        placeholder="Hier eingeben..."
        className="input_todos"
      />

      <div className="delete_clear">
        <button>Aufgabe entfernen</button>
        <button>Liste löschen</button>
      </div>
    </div>
  );
};

export default ToDoList;
