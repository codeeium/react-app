// App.tsx
import React, { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Todo } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState<string>("");

    const addTodo = () => {
        if (task.trim()) {

            setTodos([
                ...todos,
                { id: Date.now(),
                    task: task.trim(),
                    completed: false },
            ]);
            setTask(""); // Clear the input field
        }
    };

    const clearTodos = () => {
        setTodos([]);
    };

    const toggleCompletion =
        (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ?
                    { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id: number) => {
        setTodos(
            todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="container mt-4">
            <Header />
            <TodoInput task={task} setTask={setTask} addTodo={addTodo} clearTodos={clearTodos} />
            <TodoList todos={todos} toggleCompletion={toggleCompletion} removeTodo={removeTodo} />
            <div className="text-center">
                <strong>{todos.filter((todo) => !todo.completed).length}</strong>
                tasks left to do
            </div>
        </div>
    );
};

export default App;
