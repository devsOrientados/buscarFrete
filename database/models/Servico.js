module.exports = (sequelize, DataTypes) => {
    const cols = {
        id_serviço: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tipo_viagem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        auto_descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.INTEGER
        }
    };

    const config = {
        tableName: 'servicos',
        timestamps: false
    };

    const Servico = sequelize.define("Servico", cols, config);

    return Servico;
}
