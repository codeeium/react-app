// TodoList.tsx
import React from "react";
import TodoItem2 from "./TodoItem2";
import { Todo } from "../types";

interface TodoListProps {
    todos: Todo[];
    toggleCompletion: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleCompletion, removeTodo }) => {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <TodoItem2
                    key={todo.id}
                    todo={todo}
                    toggleCompletion={toggleCompletion}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
