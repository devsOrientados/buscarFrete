module.exports = (sequelize, DataTypes) => {
    const cols = {
        id_servico: {
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

    Servico.associate = (models) => {
        Servico.belongsTo(models.Cliente, {
            as:'cliente',
            foreignKey:'id_cliente'
        })

        Servico.belongsTo(models.Veiculo, {
            as:'veiculo',
            foreignKey:'id_veiculo'
        })

        Servico.belongsToMany(models.Cliente, {
            through: models.ServicoContratado,
            as:'servicosContratados',
            foreignKey:'id_servico',
        })
    };
    return Servico;
};