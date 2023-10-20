const tabRegistros = require("../model/tabRegistros");


module.exports = {
    async consultar(req, res) {
        if(!req.body.nome || req.body.tipo) {
            const consultar = await tabRegistros.sequelize.query("SELECT * FROM tabRegistros")
            return (
                res.status(200).json({
                result: consultar,
                status: "200"
            })
            )
        }else {
            return (
                res.status(401).json({
                    message: "Erro ao consultar",
                    staus: "401"
                })
            )
        }
    }
}