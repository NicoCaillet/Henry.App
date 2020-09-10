const {DataTypes} = require ("sequelize")

module.exports = (sequelize) => {
    const Notas = sequelize.define('notas', {
        //nota
        valor : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        autor : {
            type : DataTypes.STRING,
            allowNull: false
        }
    })
}