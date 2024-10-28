import React, { useState, useRef } from "react";
import './TaskMenu.css'
import Task from "../Task/Task";

function TaskMenu(props) {
    let [tasksState, setTasksState] = useState([
        { text: 'Помыть посуду' },
        { text: 'Убрать дом' },
        { text: 'Погладить кота' }
    ])
    let tasks = []
    const [input, setInput] = useState(props?.value ?? '')
    const newTask = () => {
        if (String(input).trim() === '') return alert('Вы ничего не ввели')
        let copyState = [...tasksState]
        copyState = [
            ...tasksState,
            { text: input }
        ]
        setTasksState(copyState)
    }
    tasks = tasksState.map((item, ind) => {
        console.log('1')
        return <Task
            key={ind}
            id={Math.random()}
            text={item.text}
        />
    })
    return (
        <div className="TaskMenu_block">
            <div className="TaskMenu_block_menu">
                <input id="TaskMenu_input" type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Введите текст" />
                <button className="TaskMenu_block_menu_btn" onClick={newTask}>Добавить</button>
            </div>
            <div className="TaskMenu_block_tasks">
                {tasks}
            </div>
        </div>
    )
}

export default TaskMenu