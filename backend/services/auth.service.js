const db = require("../database/connection");
const jwt = require("jsonwebtoken");
const User = require("../database/models/user.model");

class AuthService {
    async createAccount(username, password) {
        const findOne = await User.findOne({ where: { username }});

        if(findOne) {
            return { status: 400, message: "Account with this username already exists" };
        }

        await User.create({ username, password });

        return { status: 200, message: "Account successful created" };
    }

    async login(username, password) {
        const result = await User.findOne({ where: { username, password }});

        if(!result) {
            return { status: 400, message: "Account with this data doesn't exist" };
        }

        const token = jwt.sign({ id: result.id }, process.env.JWT_SECRET);

        return { status: 200, message: token };
    }
}

module.exports = new AuthService();