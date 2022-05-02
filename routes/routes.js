const express = require("express");

const routes = express.Router();

routes.get("/", (_, res, next) => {
    res.render('index');
});

module.exports = routes;