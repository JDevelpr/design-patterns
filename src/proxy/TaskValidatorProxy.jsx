class TaskService {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
        console.log("Task added:", task);
        return true;
    }

    getTasks() {
        return this.tasks;
    }
}

class TaskValidator {
    constructor(taskService) {
        this.taskService = taskService;
    }

    addTask(task) {
        if (!task || task.length === 0) {
            console.log("Task cannot be empty");
            return false;
        }
        if (task.length > 50) {
            console.log("Task is too long");
            return false;
        }
        return this.taskService.addTask(task);
    }

    getTasks() {
        return this.taskService.getTasks();
    }
}

export { TaskValidator, TaskService };
