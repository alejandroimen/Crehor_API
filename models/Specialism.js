const Datatypes = require('sequelize')

module.exports = ( sequelize, DataTypes ) => {
    const Specialism = sequelize.define( 'Specialism', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        }
    }, {
        timestamps: false
    })

    return Specialism
}
