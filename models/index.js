const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect,
    }
);

const db = {};
db.Sequelize = Sequelize;
db.connection = sequelize;

db.Specialism = require('./Specialism')(sequelize, Sequelize)
db.Teacher = require('./Teacher')(sequelize, Sequelize);
db.Group = require('./Group')(sequelize, Sequelize);
db.Subject = require('./Subject')(sequelize, Sequelize);
db.Schedule = require('./Schedule')(sequelize, Sequelize);
db.User = require('./User')(sequelize, Sequelize);

if(db.Specialism.associate) {
    db.Specialism.associate(db)
}
if(db.Teacher.associate) {
    db.Teacher.associate(db)
}
if(db.Group.associate) {
    db.Group.associate(db)
}
if(db.Subject.associate) {
    db.Subject.associate(db)
}
if(db.Schedule.associate) {
    db.Schedule.associate(db)
}if(db.Teacher.associate) {
    db.Teacher.associate(db)
}

if(db.User.associate) {
    db.User.associate(db)
}


// Sincronizar tablas en el orden correcto
async function syncTables() {
    await db.Specialism.sync();
    await db.Teacher.sync();
    await db.Group.sync();
    await db.Subject.sync();
    await db.Schedule.sync();
    await db.User.sync();
}

syncTables().then(() => {
    console.log('Tablas sincronizadas correctamente.');
}).catch((error) => {
    console.error('Error al sincronizar tablas:', error);
});

module.exports = db;