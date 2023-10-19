const express = require('express');
const connection = require("./database/index");
const tabRegistros = require("./model/tabRegistros")
const AdicionarController = require("./controller/AdicionarController")
const routes = express.Router();

routes.post("/", (req, res) => {
	const dados = req.body.user;
	console.log("Requisição" + dados);
	return res.status(200).json({
		message: "Olá mundo",
		statusCode: "200",
		
	});
});

routes.post("/adicionar", AdicionarController.adicionar);

module.exports = routes;