import { faRotateLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Done({ tasks, setTasks, done, setDone }) {
    const deleteTodo = (task) => {
        done = JSON.parse(localStorage.done);
        console.log(done);
        const indexOfTask = done.indexOf(task);
        done.splice(indexOfTask, 1);
        localStorage.done = JSON.stringify(done);
        setDone(JSON.parse(localStorage.done));
    };
    const not = (task) => {
        deleteTodo(task);
        setTasks([...tasks, task]);
    };
    return done.map((e, i) => {
        return (
            <li key={i}>
                <FontAwesomeIcon onClick={() => not(e)} icon={faRotateLeft} />
                {e}
                <FontAwesomeIcon onClick={() => deleteTodo(e)} icon={faTrash} />
            </li>
        );
    });
}

export default Done;
