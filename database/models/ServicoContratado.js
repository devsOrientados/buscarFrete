module.exports = (sequelize, DataTypes) => {
    const cols = {
        id_servico_contratado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_cliente_contratante: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_servico: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        distancia: {
            type: DataTypes.INTEGER,
        },
        data_viagem: {
            type: DataTypes.DATEONLY,
        },
        preco_final: {
            type: DataTypes.INTEGER
        },
        horario: {
            type: DataTypes.STRING,
        },
    };

    const config = {
        tableName: 'servicos_contratados',
        timestamps: false
    };
    // definir relacoes, id_cliente_contratante, id_cliente_anunciante, id_servico
    const ServicoContratado = sequelize.define("ServicoContratado", cols, config);

    ServicoContratado.associate = (models) => {
        ServicoContratado.belongsTo(models.Servico, {
            as:'Servico',
            foreignKey:'id_servico',
        })

        ServicoContratado.belongsTo(models.Cliente, {
            as:'cliente_contratante',
            foreignKey:'id_cliente_contratante'
        });

    };
    return ServicoContratado;
};