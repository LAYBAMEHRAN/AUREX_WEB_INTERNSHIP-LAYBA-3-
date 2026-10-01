import { useState } from "react";

function TaskForm({ onAdd }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTask = taskText.trim();

    if (!trimmedTask) {
      return;
    }

    onAdd(trimmedTask);
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Add a new task">
      <label htmlFor="task-input">Task name</label>
      <input
        id="task-input"
        type="text"
        placeholder="Enter a task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        aria-label="Task name"
        aria-required="true"
      />

      <button type="submit" aria-label="Add task">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;