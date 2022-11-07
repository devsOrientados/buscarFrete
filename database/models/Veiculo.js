module.exports = (sequelize, DataTypes) =>{
    const cols = {
        id_veiculo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        modelo_veiculo:{
            type: DataTypes.STRING
        },
        ano_veiculo: {
            type: DataTypes.STRING,
        },
        foto_veiculo1 : {
            type: DataTypes.STRING,
        },
        foto_veiculo2 : {
            type: DataTypes.STRING,
        },
        foto_veiculo3 : {
            type: DataTypes.STRING,
        },
        id_motorista: {
            type: DataTypes.INTEGER,
        }
    };

    const config ={
        tableName: 'veiculos',
        timestamps: false
    };

    const Veiculo = sequelize.define("Veiculo", cols, config);
    
    Veiculo.associate = (models) => {
        Veiculo.belongsTo(models.Cliente, {
       as:'motorista',
       foreignKey:'id_motorista',
   })
   };
    return Veiculo;
};