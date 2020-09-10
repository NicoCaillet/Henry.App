const {DataTypes} = require ("sequelize")

module.exports = (sequelize) => {
    const User = sequelize.define('usuario', {
        email : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nombre : {
            type: DataTypes.STRING,
            allowNull : false,
        },
        apellido : {
            type: DataTypes.STRING,
            allowNull: false
        },
        rol : {
            type: DataTypes.ENUM ('alumno', 'instructor', 'pm', 'director'),
            
            allowNull: false,
        },
        password : {
        type: DataTypes.STRING,
        allowNull: false,
        },
        edad : {
            type: DataTypes.INTEGER,
        },
        localidad : {
            type: DataTypes.STRING,
        },
        //proceso de carrera
        proceso: {
            type : DataTypes.ENUM ('1', '2','3','4'),
            allowNull: false,
        },
        provider: {
            type: DataTypes.STRING,
        },
        providerId: {
            type: DataTypes.STRING,
        },
        salt : {
            type: DataTypes.STRING
        },
    })
}