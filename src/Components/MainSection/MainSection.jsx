import React, { useRef } from "react";
import { createTask, PROJECT_STATUS } from "../../utilFuncs/project.js";
import NoProject from "./NoProject.jsx";
import { motion } from "motion/react";

const taskStatusClasses = {
  [PROJECT_STATUS.NOT_INITIATED]: "border-gray-500",
  [PROJECT_STATUS.WORKING]: "border-yellow-600",
  [PROJECT_STATUS.DONE]: "border-green-600",
};

export default function MainSection({
  project,
  requestDeleteProject,
  requestCreateTask,
  requestDeleteTask,
}) {
  const taskTextRef = useRef();

  function createTaskSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    requestCreateTask(project.id, createTask(formData.get("task-text")));
    taskTextRef.current.value = "";
  }

  if (!project) return <NoProject />;

  return (
    <main className="p-8">
      <header className="mb-6 border-b border-gray-300 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-3xl mb-1">{project.title}</h2>
            <p className="text-sm">
              Created{" "}
              {project.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <button
            className="text-red-700"
            onClick={() => {
              if (confirm("Are you sure? ")) {
                requestDeleteProject(project.id);
              }
            }}
          >
            Delete
          </button>
        </div>
        <p className="text-gray-800/90">{project.description}</p>
      </header>
      <div>
        <h2 className="text-2xl mb-3">Tasks</h2>
        <form className="mb-8" onSubmit={createTaskSubmit}>
          <input
            type="text"
            className="bg-transparent border border-gray-400 py-2 px-2 rounded mr-2 min-w-80"
            name="task-text"
            placeholder="Enter task text here..."
            ref={taskTextRef}
          />
          <button
            type="submit"
            className="py-2 px-8 bg-primary-100 text-white/80 rounded"
          >
            Add Task
          </button>
        </form>
        <ul className="space-y-3">
          {project.tasks.length === 0 && (
            <p className="text-center text-gray-400 mt-6">
              No tasks to show...
            </p>
          )}
          {project.tasks.map((tsk) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={tsk.id}
              className={`bg-gray-100 flex items-center justify-between py-3 px-4 border-l-4 ${
                taskStatusClasses[tsk.status]
              }`}
            >
              <p className="text-gray-700">{tsk.text}</p>
              <button
                className="text-red-700"
                onClick={() => requestDeleteTask(project.id, tsk.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </main>
  );
}
