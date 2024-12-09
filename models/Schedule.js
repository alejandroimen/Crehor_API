const { DataTypes } = require('sequelize')

module.exports = ( sequelize, DataTypes ) => {
    const Schedule = sequelize.define( 'Schedule', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subjectId: {
            type: DataTypes.INTEGER
        },
        teacherId: {
            type: DataTypes.INTEGER
        },
        groupId: {
            type: DataTypes.INTEGER
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

    Schedule.associate = (models) => {
        Schedule.belongsTo(models.Subject, { foreignKey: 'subjectId' });
        Schedule.belongsTo(models.Teacher, { foreignKey: 'teacherId' });
        Schedule.belongsTo(models.Group, { foreignKey: 'groupId' });
      };

    return Schedule
}