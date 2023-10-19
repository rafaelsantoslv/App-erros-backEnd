const express = require('express');
const routes = express.Router();

routes.post("/", (req, res) => {
	const dados = req.body.user;
	console.log("Requisição" + dados);
	return res.status(200).json({
		message: "Olá mundo",
		statusCode: "200",
		
	});
});

module.exports = routes;