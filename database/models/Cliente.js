module.exports = (sequelize, DataTypes) => {
    const cols = {
        id_cliente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cnh: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoria_cnh: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cep: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logradouro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    };
    const config = {
        tableName:  'clientes',
        timestamps: false
    };

    const Cliente = sequelize.define("Cliente", cols, config);

    Cliente.associate = (models) => {
        Cliente.belongsTo(models.Usuario, {
            as:'usuario',
            foreignKey:'id_usuario',
            allowNull: true,
        });

        Cliente.belongsToMany(models.Servico, {
            through: models.ServicoContratado,
            as:'servicosContratados',
            foreignKey:'id_cliente_contratante',
        })
    };

    return Cliente;
};