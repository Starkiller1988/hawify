import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import TaskList from "../components/calendar_components/TaskList";
import { v4 as uuid } from "uuid";
import Video from "../components/Videos/Backgroundmovie.mp4";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef();
  const LOCAL_STORAGE_KEY = "taskApp.tasks";

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function toggleTask(id) {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.complete = !task.complete;
    setTasks(newTasks);
  }

  function handleClearTasks() {
    const newTasks = tasks.filter((task) => !task.complete);
    setTasks(newTasks);
  }

  function handleAddTask(e) {
    const name = taskNameRef.current.value;
    if (name === "") return;
    console.log(name);
    setTasks((prevTasks) => {
      return [...prevTasks, { id: uuid(), name: name, complete: false }];
    });
    taskNameRef.current.value = null;
  }

  return (
    <div className="todo">
      <video className="bkvideo" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>

      <Link to="/" className="start">
        Startseite
      </Link>

      <div className="content">
        <TaskList tasks={tasks} toggleTask={toggleTask} />

        <input
          ref={taskNameRef}
          type="form"
          className="input_todos"
          placeholder="Hier eingeben..."
        />

        <div className="delete_clear">
          <button onClick={handleAddTask} className="add_task">
            Aufgabe hinzufügen
          </button>
          <button onClick={handleClearTasks} className="delete_task">
            Aufgabe entfernen
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
