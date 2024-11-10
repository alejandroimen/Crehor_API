const { DataTypes } = require('sequelize')


module.exports = ( sequelize, DataTypes ) => {
    const Course = sequelize.define( 'Course', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subjectId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'subjects',
                key: 'id'
            }
        },
        teacherId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'teachers',
                key: 'id'
            }
        },
        groupId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'groups',
                key: 'id'
            }
        }
    }, {
        timestamps: false
    })

    return Course
}