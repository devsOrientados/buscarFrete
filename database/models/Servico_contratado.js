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
    const servicoContratado = sequelize.define("servicoContratado", cols, config);

    return servicoContratado;
};