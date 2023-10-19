const { Model, DataTypes } = require("sequelize");
const connection = require("../database/index");



class tabRegistros extends Model {}

tabRegistros.init(
	{
		nome: DataTypes.STRING,
		tipo: DataTypes.ENUM("ERRO", "ACERTO"),
        observacao: DataTypes.TEXT
	},{
		sequelize: connection,
		tableName: "tabregistros",
	}
);

module.exports = tabRegistros;