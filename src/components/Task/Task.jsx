import React from "react";
import './Task.css'

const Task = (props) => {
    const showRenameBlock = () => {
        document.getElementById(`rename_${props.id}`).classList.toggle('displayNone')
    }
    return (
        <div className="task">
            <p className="task_text">{props.text}</p>
            <button className="task_rename_btn" onClick={showRenameBlock}>Изменить</button>
            <button className="task_del_btn" onClick={props.removeTask}>Удалить</button>
            <div id={`rename_${props.id}`} className="task_rename_block displayNone">
                <input id={`input_${props.id}`} type="text" placeholder="Введите новый текст" />
                <button onClick={props.renameTask}>Изменить</button>
            </div>
        </div>
    )
}

export default Task