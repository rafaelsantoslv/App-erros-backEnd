const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.json());
app.use(routes)


try {
    app.listen(3131)
    console.log("[WARNING] " + "CONTADOR DE ERROS" + " ON NA PORTA " + "3131");
} catch (error) {
    console.log("ERRO AO INICIAR O SERVIDOR NA PORTA " + "3131" + " - " + error);
}