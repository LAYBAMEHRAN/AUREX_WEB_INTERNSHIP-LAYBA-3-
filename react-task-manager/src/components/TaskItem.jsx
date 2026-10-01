function TaskItem({ task, onDelete, onComplete }) {
  return (
    <div
      className={`task-item ${task.completed ? "completed" : ""}`}
      aria-label={`Task: ${task.text}`}
    >
      <span>{task.text}</span>

      <div>
        <button
          type="button"
          onClick={() => onComplete(task.id)}
          aria-label={
            task.completed
              ? `Mark "${task.text}" as active`
              : `Mark "${task.text}" as completed`
          }
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete "${task.text}"`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;