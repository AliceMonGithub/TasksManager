const TasksService = require("../services/tasks.service")

class TasksController {
    async getAllTasks(req, res) {
        const { token } = req.cookies;

        if(!token) return res.status(401).send("Not authorized");

        const result = await TasksService.getAllTasks(token);

        return res.send(result);
    }

    async createTask(req, res) {
        const { text } = req.body;
        const { token } = req.cookies;

        if(!text || text == "") return res.status(400).send("Enter text to create task");
        if(!token) return res.status(401).send("Not authorized");

        const result = await TasksService.createTask(text, token);

        return res.status(result.status).send(result.message);
    }

    async deleteTask(req, res) {
        const { id } = req.body;
        const { token } = req.cookies;

        if(!id) return res.status(400).send("Enter id to delete");
        if(!token) return res.status(401).send("Not authorized");

        const result = await TasksService.deleteTask(id, token);

        return res.status(result.status).send(result.message);
    }
}

module.exports = new TasksController();