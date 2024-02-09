import React, { createContext, useState } from "react";
import Tasks from "./Tasks";
import Editing from "./Editing";

export default function List() {
    let [tasks, setTasks] = useState(JSON.parse(localStorage.todo));
    let box, indexOfTask;
    const pullTodo = (task) => {
        tasks = JSON.parse(localStorage.todo);
        indexOfTask = tasks.indexOf(task);
        box = tasks[indexOfTask];
        const editField = document.querySelector(".editing form input");
        editField.value = task;
    };
    const pushTodo = (e) => {
        e.preventDefault();
        box = document.querySelector(".editing form input").value;
        tasks[indexOfTask] = box;
        localStorage.todo = JSON.stringify(tasks);
    };
    return (
        <div>
            <ul>
                <Editing pushTodo={pushTodo} />
                <Tasks tasks={tasks} setTasks={setTasks} pullTodo={pullTodo} />
            </ul>
        </div>
    );
}
