// db.config.js
module.exports = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'db_password',
    database: process.env.DB_DATABASE || 'navigator_db',
    port: process.env.DB_PORT || 3307,
};