import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, toggleTask }) {
  return (
    <div className="task-list">
      <div className="lefttasks">
        {tasks.filter((task) => !task.complete).length} Aufgaben übrig
      </div>
      <div className="title_tasklist">
        <h2 className="title_task">To-Do-List</h2>
      </div>
      <div className="back">
        <div className="value_task">
          {tasks.map((task) => {
            return <Task key={task.id} toggleTask={toggleTask} task={task} />;
          })}
        </div>
      </div>
    </div>
  );
}
