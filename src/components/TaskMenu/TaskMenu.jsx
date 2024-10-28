import React, { useState } from "react";
import './TaskMenu.css'
import Task from "../Task/Task";

function AddTaskForm(props) {
    const [tasksState, setTasksState] = useState([
        { text: 'Помыть посуду' },
        { text: 'Убрать дом' },
        { text: 'Погладить кота' }
    ])
    const [input, setInput] = useState(props?.value ?? '')
    const newTask = () => {
        if (String(input).trim() === '') return alert('Вы ничего не ввели')
        const copyState = [
            ...tasksState,
            { text: input }
        ]
        setTasksState(copyState)
    }
    const renameTask = (event, index) => {
        const taskCopy = {...tasksState[index]}
        const stateCopy = [...tasksState]
        console.log(event.target.value)
        taskCopy.text = document.getElementById(`input_${index}`).value
        stateCopy[index] = taskCopy
        setTasksState(stateCopy)
    }
    return (
        <div className="TaskMenu_block">
            <div className="TaskMenu_block_menu">
                <input id="TaskMenu_input" type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Введите текст" />
                <button className="TaskMenu_block_menu_btn" onClick={newTask}>Добавить</button>
            </div>
            <div className="TaskMenu_block_tasks">
                {tasksState.map((item, ind) => {
                    return <Task
                        key={ind}
                        text={item.text}
                        inpId={ind}
                        renameTask={(event) => renameTask(event, ind)}
                    />
                })}
            </div>
        </div>
    )
}

export default AddTaskForm