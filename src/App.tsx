import React, { useState } from "react";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState<string>("");

    const addTodo = () => {
        if (task.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), task: task.trim(), completed: false },
            ]);
            setTask(""); // Clear the input field
        }
    };

    const clearTodos = () => {
        setTodos([]);
    };

    const toggleCompletion = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">To-Do List</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="btn btn-primary" onClick={addTodo}>
                    Add
                </button>
                <button className="btn btn-danger" onClick={clearTodos}>
                    Clear All
                </button>
            </div>
            <TodoList
                todos={todos}
                toggleCompletion={toggleCompletion}
                removeTodo={removeTodo}
            />
            <div className="text-center">
                <strong>{todos.filter((todo) => !todo.completed).length}</strong> tasks
                left to do
            </div>
        </div>
    );
};

export default App;
