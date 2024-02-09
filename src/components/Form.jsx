import React, { useContext } from "react";
import TasksContext from "../components/TasksContext";
export default function Form() {
    const value = useContext(TasksContext);
    if (!localStorage.todo) {
        localStorage.todo = JSON.stringify(value.current);
    }
    const addtodo = (e) => {
        const val = document.getElementById("create").value;
        document.getElementById("create").value = "";
        e.preventDefault();
        if (val !== "") {
            value.current = [...value.current, val];
            localStorage.todo = JSON.stringify(value.current);
        }
    };
    return (
        <div className="form">
            <form>
                <input type="text" id="create" placeholder="Add todo here.." />
                <button onClick={addtodo}>Add</button>
            </form>
        </div>
    );
}
