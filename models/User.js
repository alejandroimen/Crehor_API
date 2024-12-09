module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        idTeacherAssociated: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Teachers',
                key: 'id'
            } 
        }
    }, {
        tableName: 'users',
        timestamps: false
    });

    return User;
};