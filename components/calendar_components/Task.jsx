import React from 'react'

export default function Task({ task, toggleTask }) {

function handleTaskClick() {
    toggleTask(task.id)
}


    return (
        <div className="numberoftasks">
            <label className="labeltasks">
                <div><input type="checkbox" checked={task.complete} onChange={handleTaskClick} className="check" /></div>
            <div className="task">{task.name}</div>
            </label>
        
        </div>
    )
}
