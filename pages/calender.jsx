import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import TaskList from "../components/calendar_components/TaskList";
import { v4 as uuid } from "uuid";

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
      <Link to="/" className="start">
        Startseite
      </Link>

      <TaskList tasks={tasks} toggleTask={toggleTask} />

      <input
        ref={taskNameRef}
        type="form"
        className="input_todos"
        placeholder="Hier eingeben..."
      />

      <div className="delete_clear">
        <button onClick={handleAddTask}>Aufgabe hinzufügen</button>
        <button onClick={handleClearTasks}>Aufgabe entfernen</button>
      </div>
    </div>
  );
};

export default ToDoList;
