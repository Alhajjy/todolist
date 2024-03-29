import "./App.scss";
import Form from "./components/Form.jsx";
import React, { useEffect, useState } from "react";
import Tasks from "./components/Tasks.jsx";
import Editing from "./components/Editing.jsx";
import Done from "./components/Done.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFaceAngry,
    faFaceSmileBeam,
    faListCheck,
} from "@fortawesome/free-solid-svg-icons";

function App() {
    if (!localStorage.todo) {
        localStorage.setItem("todo", JSON.stringify([]));
    }
    if (!localStorage.done) {
        localStorage.setItem("done", JSON.stringify([]));
    }
    const [tasks, setTasks] = useState(JSON.parse(localStorage.todo));
    const [done, setDone] = useState(JSON.parse(localStorage.done));
    let box, indexOfTask;
    const addTodo = (e) => {
        const val = document.getElementById("create").value;
        document.getElementById("create").value = "";
        e.preventDefault();
        if (val !== "") {
            setTasks([...tasks, val]);
        }
    };
    const pullTodo = (task) => {
        indexOfTask = tasks.indexOf(task);
        box = tasks[indexOfTask];
        const editField = document.querySelector(".editing form input");
        editField.value = task;
        editField.focus();
    };
    const pushTodo = (e) => {
        e.preventDefault();
        box = document.querySelector(".editing form input").value;
        tasks[indexOfTask] = box;
        localStorage.todo = JSON.stringify(tasks);
        setTasks(JSON.parse(localStorage.todo));
        document.querySelector(".editing form input").value = "";
    };
    useEffect(() => {
        localStorage.todo = JSON.stringify(tasks);
    }, [tasks]);
    useEffect(() => {
        localStorage.done = JSON.stringify(done);
    }, [done]);
    return (
        <div className="App">
            <h1>^_^ Todo List ^_^</h1>
            <div className="up">
                <Form tasks={tasks} setTasks={setTasks} addTodo={addTodo} />
                <Editing pushTodo={pushTodo} />
            </div>
            <div className="down">
                <div className="tasks-section sec">
                    <div className="title">
                        <h2>Tasks {tasks.length} </h2>
                        <FontAwesomeIcon icon={faFaceAngry} />
                    </div>
                    <ul>
                        <Tasks
                            tasks={tasks}
                            setTasks={setTasks}
                            pullTodo={pullTodo}
                            done={done}
                            setDone={setDone}
                        />
                    </ul>
                </div>
                <div className="done-section sec">
                    <div className="title">
                        <h2>Done Tasks {done.length} </h2>
                        <FontAwesomeIcon icon={faFaceSmileBeam} />
                    </div>
                    <ul>
                        <Done
                            tasks={tasks}
                            setTasks={setTasks}
                            done={done}
                            setDone={setDone}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
