const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const connection = require("./database/index");
require("dotenv/config"); // VARIAVEIS DE AMBIENTE
require("./database"); // DATABASE
const app = express()

app.use(bodyParser.json());
app.use(routes)


try {
	app.listen(process.env.SERVER_PORT);
	console.log("[WARNING] " + process.env.APP_NAME + " ON NA PORTA " + process.env.SERVER_PORT);
} catch (error) {
	console.log("ERRO AO INICIAR O SERVIDOR NA PORTA " + process.env.SERVER_PORT + " - " + error.message);
}