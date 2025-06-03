const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "mysql_db",
        user: "root",
        password: "password",
        database: "restapitest123",
        multipleStatements: true,
        connectTimeout: 60000
    },
    listPerPage: 20,
};

module.exports = config;