// TodoInput.tsx
import React from "react";

interface TodoInputProps {
    task: string;
    setTask: (value: string) => void;
    addTodo: () => void;
    clearTodos: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ task, setTask, addTodo, clearTodos }) => {
    return (
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
    );
};

export default TodoInput;