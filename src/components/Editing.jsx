import React from "react";
export default function Editing({ pushTodo }) {
    return (
        <div className="editing">
            <form>
                <input type="text" placeholder="Add todo here.." />
                <button onClick={pushTodo}>update</button>
            </form>
        </div>
    );
}
