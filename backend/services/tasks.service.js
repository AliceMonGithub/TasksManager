const sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const User = require("../database/models/user.model");
const Tasks = require("../database/models/tasks.model");

class TasksService {
    async getAllTasks(token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded.id) return { status: 401, message: "Not authorized" };

        const userId = decoded.id;
        const result = await User.findOne({ where: { id: userId }});
        const tasks = await Tasks.findAll({ where: { user: result.id }});

        return tasks;
    }

    async createTask(text, token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded.id) return { status: 401, message: "Not authorized" };

        const userId = decoded.id;
        const result = await User.findOne({ where: { id: userId }});
        const instance = await Tasks.create({ text, user: result.id })

        return { status: 200, message: "Task successful created" };
    }

    async deleteTask(id, token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded.id) return { status: 401, message: "Not authorized" };

        const result = await Tasks.findOne({ where: { id }});

        if(!result) return { status: 500, message: "Task doesn't exist" };

        result.destroy();

        return { status: 200, message: "Task succesful deleted" };
    }
}

module.exports = new TasksService();