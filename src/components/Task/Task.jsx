import React from "react";
import './Task.css'

const Task = (props) => {
    const randomNum = Math.random()
    const removeTask = () => {
        document.getElementById(randomNum).remove()
    }
    return (
        <div id={randomNum} className="task">
            <p className="task_text">{props.text}</p>
            <button className="task_btn" onClick={removeTask}>Delete</button>
        </div>
    )
}

export default Task