import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Form({ addTodo }) {
    return (
        <form className="form">
            <input type="text" id="create" placeholder="Add todo here.." />
            <button onClick={addTodo}>
                <FontAwesomeIcon icon={faSquarePlus} />
            </button>
        </form>
    );
}
