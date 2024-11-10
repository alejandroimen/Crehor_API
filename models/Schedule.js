const { DataTypes } = require('sequelize')

module.exports = ( sequelize, DataTypes ) => {
    const Schedule = sequelize.define( 'Schedule', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        courseId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'courses',
                key: 'id'
            }
        },
        day: {
            type: DataTypes.INTEGER,
        },
        hour: {
            type: DataTypes.INTEGER,
        }
    }, {
        timestamps: false
    })

    return Schedule
}