module.exports = (sequelize, DataTypes) =>{
    const cols = {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },    
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    const config ={
        tableName: 'usuarios',
        timestamps: false
    }
    const Usuario = sequelize.define("Usuario", cols, config);
    
    Usuario.associate = (models) => {
        Usuario.belongsTo(models.Cliente, {
        as:'cliente',
        foreignKey:'id_usuario',
    });
    };
    return Usuario;
};