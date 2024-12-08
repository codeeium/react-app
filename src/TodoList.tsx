import React from "react";

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    toggleCompletion: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
                                               todos,
                                               toggleCompletion,
                                               removeTodo,
                                           }) => {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <li
                    key={todo.id}
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
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeTodo(todo.id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
