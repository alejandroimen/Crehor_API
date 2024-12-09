const { DataTypes } = require('sequelize');

module.exports = ( sequelize, DataTypes ) => {
    const Group = sequelize.define('Group', {
        id:  {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        grade: {
            type: DataTypes.INTEGER
        },
        group: {
            type: DataTypes.STRING
        },
        hasSchedule: {
            type: DataTypes.BOOLEAN
        }
    }, {
        timestamps: false
    })
    
    Group.associate = (models) => {
        Group.hasMany(models.Schedule, { foreignKey: 'groupId' });
    };

    return Group
}