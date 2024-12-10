import React from "react";
import { Todo } from "../../../types";
import TodoText from "./TodoText";
import TodoDeleteButton from "./TodoDeleteButton";

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
            <TodoText
                task={todo.task}
                completed={todo.completed}
                onToggleCompletion={() => toggleCompletion(todo.id)}
            />
            <TodoDeleteButton onDelete={() => removeTodo(todo.id)} />
        </li>
    );
};

export default TodoItem;