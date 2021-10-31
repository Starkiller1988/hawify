import { Link } from "react-router-dom";

const ToDoList = () => {
  return (
    <div className="todo">
      <Link to="/" className="start">
        Startseite
      </Link>

      <div>
        <form className="choose_weekday">
          <select className="weekday">
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

      <div className="choose_date">
        <form className="choose_day">
          <select className="day">
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="five">5</option>
            <option value="six">6</option>
            <option value="seven">7</option>
            <option value="eight">8</option>
            <option value="nine">9</option>
            <option value="ten">10</option>
            <option value="eleven">11</option>
            <option value="twelve">12</option>
            <option value="thirteen">13</option>
            <option value="fourteen">14</option>
            <option value="fifteen">15</option>
            <option value="sixteen">16</option>
            <option value="seventeen">17</option>
            <option value="eighteen">18</option>
            <option value="nineteen">19</option>
            <option value="twenty">20</option>
            <option value="twentyone">21</option>
            <option value="twentytwo">22</option>
            <option value="twentythree">23</option>
            <option value="twentyfour">24</option>
            <option value="twentyfive">25</option>
            <option value="twentysix">26</option>
            <option value="twentyseven">27</option>
            <option value="twentyeight">28</option>
            <option value="twentynine">29</option>
            <option value="thirty">30</option>
            <option value="thirtyone">31</option>
          </select>
        </form>

        <div>
          <form className="choose_month">
            <select className="month">
              <option value="january">Januar</option>
              <option value="february">Februar</option>
              <option value="march">März</option>
              <option value="april">April</option>
              <option value="may">Mai</option>
              <option value="june">Juni</option>
              <option value="july">Juli</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">Oktober</option>
              <option value="november">November</option>
              <option value="december">Dezember</option>
            </select>
          </form>

          <div>
            <form className="choose_year">
              <select className="year">
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
              </select>
            </form>
          </div>
        </div>
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
