const {DataTypes} = require ("sequelize")

module.exports = (sequelize) => {
    const Grupo = sequelize.define('grupo', {
        nombre : {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
}