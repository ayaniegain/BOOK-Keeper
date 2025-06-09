import React from "react";
import { useNavigate } from "react-router";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded transition"
      aria-label="Go back to previous page"
    >
      ⬅️ back
    </button>
  );
}

export default BackButton;
