const express = require("express");

const authController = require("../Controllers/auth");

const router = express.Router();

router.get("/login", authController.getLogin);

module.exports = router;
