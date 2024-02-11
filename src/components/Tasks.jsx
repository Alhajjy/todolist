import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faSquareCheck,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Tasks = ({ tasks, setTasks, pullTodo, done, setDone }) => {
    const deleteTodo = (task) => {
        tasks = JSON.parse(localStorage.todo);
        const indexOfTask = tasks.indexOf(task);
        tasks.splice(indexOfTask, 1);
        localStorage.todo = JSON.stringify(tasks);
        setTasks(JSON.parse(localStorage.todo));
    };
    const toDone = (task) => {
        deleteTodo(task);
        setDone([...done, task]);
    };
    return tasks.map((e, i) => {
        return (
            <li className="task" key={i}>
                <span className="side">
                    <FontAwesomeIcon
                        className="ic done"
                        onClick={() => toDone(e)}
                        icon={faSquareCheck}
                    />
                    <span className="task-text">{e}</span>
                </span>
                <span className="side">
                    <FontAwesomeIcon
                        className="ic edit"
                        onClick={() => pullTodo(e)}
                        icon={faPenToSquare}
                    />
                    <FontAwesomeIcon
                        className="ic delete"
                        onClick={() => deleteTodo(e)}
                        icon={faTrash}
                    />
                </span>
            </li>
        );
    });
};

export default Tasks;
