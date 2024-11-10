const Datatypes = require('sequelize')

module.exports = ( sequelize, DataTypes ) => {
    const Subject = sequelize.define( 'Subject', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        credits: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        hours: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        timestamps: false
    })

    return Subject
}
