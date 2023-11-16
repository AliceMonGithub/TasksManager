const AuthService = require("../services/auth.service");

class AuthController {
    async register(req, res) {
        const { username, password } = req.body;

        if(!username || !password) {
            return res.status(400).send("Enter username and password");
        }

        const result = await AuthService.createAccount(username, password);

        return res.status(result.status).send(result.message);
    }

    async login(req, res) {
        const { username, password } = req.body;

        if(!username || !password) return res.status(400).send("Enter username and password");

        const token = await AuthService.login(username, password);

        if(token.status != 200) return res.status(404).send("Invalid password or username");

        return res.cookie("token", token.message).status(token.status).send("Successful login into account");
    }
}

module.exports = new AuthController();