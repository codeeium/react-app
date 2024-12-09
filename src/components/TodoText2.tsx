// TodoText2.tsx
import React from "react";

interface TodoTextProps {
    task: string;
    completed: boolean;
    onToggleCompletion: () => void;
}

const TodoText2: React.FC<TodoTextProps> = ({ task, completed, onToggleCompletion }) => {
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

export default TodoText2;
