module.exports = (sequelize, DataTypes) =>{
    const cols = {
        id_anuncio: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_motorista:{
            type: DataTypes.INTEGER,
            allowNull: false
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
        foto_motorista: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.INTEGER
        }
    };
    
    const config ={
        tableName: 'anuncios',
        timestamps: false
    };

    const Anuncio = sequelize.define("Anuncio", cols, config);
    
   // Anuncio.associate = (models) => {
    //    Anuncio.belongsTo(models.Cliente, {
    //    as:'motorista',
     //   foreignKey:'id_motorista',
    //})
   // };

    return Anuncio;
}
