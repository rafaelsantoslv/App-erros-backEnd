
const tabRegistros = require("../model/tabRegistros")

module.exports = {
	async adicionar(req, res) {
		if(req.body.nome && req.body.tipo){
			const add = await tabRegistros.create({
				nome: req.body.nome,
				tipo: req.body.tipo,
				observacao: req.body.observacao
			});
			return res.status(200).json({
				message: "Sucess",
				status: "200"
			})
		}else {
			return res.status(401).json({
				message: "Error",
				status: "401"
			})
		}
	}
};
