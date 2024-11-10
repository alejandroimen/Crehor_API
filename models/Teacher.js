const { DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
    const Teacher = sequelize.define('Teacher', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        specialism: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'specialisms',
                key: 'id'
            }
        },
        degree: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },  {
        timestamps: false
    })

    return Teacher
}