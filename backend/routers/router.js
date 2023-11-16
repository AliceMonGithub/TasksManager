const express = require("express");
const router = express.Router();

const taskRouter = require("./tasks.router");
const authRouter = require("./auth.router");

router.use("/tasks", taskRouter);
router.use("/auth", authRouter);

module.exports = router;