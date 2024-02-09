import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Tasks = ({ tasks, setTasks, pullTodo }) => {
    const deleteTodo = (task) => {
        tasks = JSON.parse(localStorage.todo);
        console.log("core: ", tasks);
        const indexOfTask = tasks.indexOf(task);
        tasks.splice(indexOfTask, 1);
        console.log("new: ", tasks);
        localStorage.todo = JSON.stringify(tasks);
        setTasks(JSON.parse(localStorage.todo));
    };

    useEffect(() => {
        localStorage.todo = JSON.stringify(tasks);
    }, [tasks]);
    return tasks.map((e, i) => {
        return (
            <li key={i}>
                {e}
                <span>
                    <FontAwesomeIcon
                        onClick={() => pullTodo(e)}
                        icon={faPenToSquare}
                    />
                    <FontAwesomeIcon
                        onClick={() => deleteTodo(e)}
                        icon={faTrash}
                    />
                </span>
            </li>
        );
    });
};

export default Tasks;
