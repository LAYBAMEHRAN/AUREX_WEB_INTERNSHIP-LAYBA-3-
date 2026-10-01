import { useMemo, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const filteredTasks = useMemo(() => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [tasks, filter]);

  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main className="app">
      <section className="task-manager">
        <header className="app-header">
          <h1>Task Manager</h1>
          <p>Organize your daily tasks easily.</p>
        </header>

        <TaskForm onAdd={addTask} />

        <div className="task-summary" aria-label="Task summary">
          <span>Total: {tasks.length}</span>
          <span>Active: {activeCount}</span>
          <span>Completed: {completedCount}</span>
        </div>

        <div className="filters" aria-label="Task filters" role="group">
          <button
            type="button"
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
            aria-label="Show all tasks"
            aria-pressed={filter === "all"}
          >
            All
          </button>

          <button
            type="button"
            className={filter === "active" ? "active" : ""}
            onClick={() => setFilter("active")}
            aria-label="Show active tasks"
            aria-pressed={filter === "active"}
          >
            Active
          </button>

          <button
            type="button"
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
            aria-label="Show completed tasks"
            aria-pressed={filter === "completed"}
          >
            Completed
          </button>
        </div>

        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onComplete={toggleTask}
        />
      </section>
    </main>
  );
}

export default App;