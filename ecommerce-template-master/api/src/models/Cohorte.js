const {DataTypes} = require ("sequelize")

module.exports = (sequelize) => {
    const Cohorte = sequelize.define('cohorte', {
        fecha : {
            type: DataTypes.DATE,
            allowNull: false,
        },
    })
}