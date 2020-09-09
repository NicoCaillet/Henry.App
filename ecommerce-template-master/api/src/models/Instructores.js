const {DataTypes} = require ("sequelize")

module.exports = (sequelize) => {
    const Instructores = sequelize.define('instructores', {
        nombre : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido : {
        type: DataTypes.STRING,
        allowNull: false,
        },
    })
}