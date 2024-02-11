import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function Editing({ pushTodo }) {
    return (
        <div className="editing field">
            <form>
                <input type="text" placeholder="--Edit Task.." />
                <button onClick={pushTodo}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>
            </form>
        </div>
    );
}
