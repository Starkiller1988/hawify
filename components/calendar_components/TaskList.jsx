import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, toggleTask }) {
  const uncompletedTasks = tasks.filter((task) => !task.complete).length

  return (
    <div className="task-list">
      <div className="lefttasks">
        {uncompletedTasks} Aufgaben übrig
      </div>
      <div className="title_tasklist">
        <h2>To-Do-List</h2>
      </div>
      <div className="back">
        <div className="value_task">
          {tasks.map((task) =>  (
           <Task key={task.id} toggleTask={toggleTask} task={task} />;
          ))}
        </div>
      </div>
    </div>
  );
}
