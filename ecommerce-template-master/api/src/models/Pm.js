const {DataTypes} = require ("sequelize")

module.exports = (sequelize) => {
    const Pm = sequelize.define('pm', {
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