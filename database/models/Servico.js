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
        id_veiculo: {
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
        foto_motorista: {
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
    // definir relacoes, id_cliente, id_veiculo
    const Servico = sequelize.define("Servico", cols, config);

    return Servico;
}
