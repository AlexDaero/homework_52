import React from "react";

const Task = (props) => {
    const randomNum = Math.random()
    const removeTask = () => {
        document.getElementById(randomNum).remove()
    }
    return (
        <div id={randomNum} className="task">
            <p>{props.text}</p>
            <button onClick={removeTask}>Delete</button>
        </div>
    )
}

export default Task