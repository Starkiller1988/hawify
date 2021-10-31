import { Link } from "react-router-dom";

const ToDoList = () => {
  return (
    <div className="todo">
      <Link to="/" className="start">
        Startseite
      </Link>

      <div>
        <form className="choose_day">
          <select>
            <option value="Montag">Montag</option>
            <option value="Dienstag">Dienstag</option>
            <option value="Mittwoch">Mittwoch</option>
            <option value="Donnerstag">Donnerstag</option>
            <option value="Freitag">Freitag</option>
            <option value="Samstag">Samstag</option>
            <option value="Sonntag">Sonntag</option>
          </select>
        </form>
      </div>

<div className="todo_field">
<h2>To-Do Liste</h2>
</div>

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
