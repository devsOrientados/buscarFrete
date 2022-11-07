module.exports = (sequelize, DataTypes) => {
    const cols = {
        id_serviço_contratado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_cliente_contratante: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_cliente_anunciante: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_serviço: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        distancia: {
            type: DataTypes.INTEGER,
        },
        data_viagem: {
            type: DataTypes.DATE,
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
    const servico_contratado = sequelize.define("servico_contratado", cols, config);

    servico_contratado.associate = (models) => {
        servico_contratado.belongsTo(models.Servico, {
            as:'Servico',
            foreignKey:'id_servico',
        })

        servico_contratado.belongsTo(models.Cliente, {
            as:'cliente_contratante',
            foreignKey:'id_cliente_contratante'
        });

        servico_contratado.belongsTo(models.Cliente, {
            as:'cliente_anunciante',
            foreignKey:'id_cliente_anunciante'
        })
    };
    return servico_contratado;
};