// TodoItem2.tsx
import React from "react";
import { Todo } from "../types";
import TodoText2 from "./TodoText2";
import TodoDeleteButton2 from "./TodoDeleteButton2";

interface TodoItemProps {
    todo: Todo;
    toggleCompletion: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem2: React.FC<TodoItemProps> = ({ todo, toggleCompletion, removeTodo }) => {
    return (
        <li
            className={`list-group-item d-flex justify-content-between align-items-center ${
                todo.completed ? "list-group-item-success" : ""
            }`}
        >
            <TodoText2
                task={todo.task}
                completed={todo.completed}
                onToggleCompletion={() => toggleCompletion(todo.id)}
            />
            <TodoDeleteButton2 onDelete={() => removeTodo(todo.id)} />
        </li>
    );
};

export default TodoItem2;
