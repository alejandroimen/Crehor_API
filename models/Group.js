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
        }
    }, {
        timestamps: false
    })
    
    return Group
}