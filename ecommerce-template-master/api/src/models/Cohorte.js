const {DataTypes} = require ("sequelize")

module.exports = (sequelize) => {
    const Cohorte = sequelize.define('cohorte', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha : {
            type: DataTypes.DATE,
            allowNull: false,
        },
    })
}