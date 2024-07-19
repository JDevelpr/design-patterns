import React, { useState } from "react";
import { TaskValidator, TaskService } from "../proxy/TaskValidatorProxy";
import "../assets/styles/TaskList.css";

const TaskList = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");
    const taskService = new TaskService();
    const taskValidator = new TaskValidator(taskService);

    const handleAddTask = () => {
        if (taskValidator.addTask(task)) {
            setTasks((prevTasks) => [...prevTasks, task]);
            setTask("");
            setError("");
        } else {
            setError("Task cannot be empty or too long.");
        }
    };

    return (
        <div className="task-list-container">
            <h1 className="task-list-title">Task List</h1>
            <input
                className="task-list-input"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button className="task-list-button" onClick={handleAddTask}>Add Task</button>
            {error && <p className="task-list-error">{error}</p>} {/* Mostrar errores */}
            <ul className="task-list">
                {tasks.map((t, index) => (
                    <li className="task-list-item" key={index}>{t}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
