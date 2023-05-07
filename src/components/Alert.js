import React, { useState, useEffect } from "react";

function Alert({ error }) {
  const [showError, setShowError] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowError(false);
    }, 5000);

    return () => clearTimeout(timerId);
  }, []);

  if (!showError) {
    return null;
  }

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative transition duration-500 ease-in-out">
      <span className="block sm:inline">{error.message}</span>
      <span
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
        onClick={() => setShowError(false)}
      >
        <svg
          className="fill-current h-6 w-6 text-red-500 hover:text-red-800 cursor-pointer transition duration-500 ease-in-out"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 13.236c-.391.39-1.023.39-1.414 0L10 11.414l-2.93 2.822c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.023 0-1.414L8.586 10 5.656 7.078c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0L10 8.586l2.93-2.822c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414L11.414 10l2.93 2.822c.39.39.39 1.023 0 1.414z" />
        </svg>
      </span>
    </div>
  );
}

export default Alert;
