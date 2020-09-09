const {DataTypes} = require ("sequelize")
module.exports = (sequelize) => {
    const Alumno = sequelize.define ('alumno', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
}