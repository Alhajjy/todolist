import "./App.css";
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";
import { useRef } from "react";
import TasksContext from "./components/TasksContext.js";
function App() {
    const valueRef = useRef(["صلي على سيدنا محمد"]);
    return (
        <div className="App">
            <TasksContext.Provider value={valueRef}>
                <Form />
                <List />
            </TasksContext.Provider>
        </div>
    );
}

export default App;
