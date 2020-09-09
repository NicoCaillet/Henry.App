const {DataTypes} = require ("sequelize")

module.exports = (sequelize) => {
    const User = sequelize.define('user', {
        email : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password : {
        type: DataTypes.STRING,
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