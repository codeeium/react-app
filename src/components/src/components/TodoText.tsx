import React from "react";

interface TodoTextProps {
    task: string;
    completed: boolean;
    onToggleCompletion: () => void;
}

const TodoText: React.FC<TodoTextProps> = ({ task, completed, onToggleCompletion }) => {
    return (
        <span
            style={{
                textDecoration: completed ? "line-through" : "none",
                cursor: "pointer",
            }}
            onClick={onToggleCompletion}
        >
            {task}
        </span>
    );
};

export default TodoText;