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
    const Usuario = sequileze.define("Usuario", cols, config);
    return Usuario;
};