import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Form({ addTodo }) {
    return (
        <form className="form field">
            <input type="text" id="create" placeholder="--New Task.." />
            <button onClick={addTodo}>
                <FontAwesomeIcon icon={faSquarePlus} />
            </button>
        </form>
    );
}
