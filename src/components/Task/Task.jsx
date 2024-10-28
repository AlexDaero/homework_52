import React from "react";
import './Task.css'

const Task = (props) => {
    const randomNum = Math.random()
    const removeTask = () => {
        document.getElementById(randomNum).remove()
    }
    const showRenameBlock = () => {
        document.getElementById(`rename_${randomNum}`).classList.toggle('displayNone')
    }
    return (
        <div id={randomNum}>
            <div className="task">
                <p className="task_text">{props.text}</p>
                <button className="task_rename_btn" onClick={showRenameBlock}>Изменить</button>
                <button className="task_del_btn" onClick={removeTask}>Удалить</button>
            </div>
            <div id={`rename_${randomNum}`} className="displayNone">
                <input id={`input_${props.inpId}`} type="text" placeholder="Введите новый текст" />
                <button onClick={props.renameTask}>Изменить</button>
            </div>
        </div>
    )
}

export default Task