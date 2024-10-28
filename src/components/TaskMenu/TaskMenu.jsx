import React, { useEffect, useState, useId } from "react";
import './TaskMenu.css'
import Task from "../Task/Task";

function TaskMenu(props) {
    let [tasksState, setTasksState] = useState([
        { text: 'lol' },
        { text: 'kek' }
    ])
    let tasks = []
    const [input, setInput] = useState(props?.value ?? '')
    const newTask = () => {
        let copyState = [...tasksState]
        copyState = [
            ...tasksState,
            { text: input }
        ]
        setTasksState(copyState)
    }
    tasks = tasksState.map((item, ind) => {
        return <Task
            key={ind}
            text={item.text}
        />
    })
    return (
        <div>
            <input id="TaskMenu_input" type="text" value={input} onInput={e => setInput(e.target.value)} placeholder="Введите текст" />
            <button onClick={newTask}>Добавить</button>
            {tasks}
        </div>
    )
}

export default TaskMenu