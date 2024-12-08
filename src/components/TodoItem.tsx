// TodoItem.tsx
import React from "react";
import { Todo } from "../types";

interface TodoItemProps {
    todo: Todo;
    toggleCompletion: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleCompletion, removeTodo }) => {
    return (
        <li
            className={`list-group-item d-flex justify-content-between align-items-center ${
                todo.completed ? "list-group-item-success" : ""
            }`}
        >
            <span
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                }}
                onClick={() => toggleCompletion(todo.id)}
            >
                {todo.task}
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => removeTodo(todo.id)}>
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
