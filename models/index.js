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
db.Course = require('./Course')(sequelize, Sequelize);
db.Schedule = require('./Schedule')(sequelize, Sequelize);

// Sincronizar tablas en el orden correcto
async function syncTables() {
    await db.Specialism.sync();
    await db.Teacher.sync();
    await db.Group.sync();
    await db.Subject.sync();
    await db.Course.sync();
    await db.Schedule.sync();
}

syncTables().then(() => {
    console.log('Tablas sincronizadas correctamente.');
}).catch((error) => {
    console.error('Error al sincronizar tablas:', error);
});

module.exports = db;