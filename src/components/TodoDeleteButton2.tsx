// TodoDeleteButton2.tsx
import React from "react";

interface TodoDeleteButtonProps {
    onDelete: () => void;
}

const TodoDeleteButton2: React.FC<TodoDeleteButtonProps> = ({ onDelete }) => {
    return (
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
            Delete
        </button>
    );
};

export default TodoDeleteButton2;
