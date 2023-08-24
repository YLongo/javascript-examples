const knex = require("knex");

const sqliteDB = knex({
    client: "sqlite3",
    connection: {
        filename: "./data/sqlite3db.sqlite",
    },
    debug: true,
    pool: {
        min: 2,
        max: 7,
    },
    useNullAsDefault: true
});

sqliteDB.schema
    .hasTable("users")
    .then(function (exists) {
        if (exists == false) {
            return sqliteDB.schema.createTable("users", function (table) {
                table.increments("uid").primary();
                table.string("userName");
                table.string("password");
            });
        }
    })
    .then(function () {
        return sqliteDB("users").insert([
            {
                userName: "admin",
                password: "admin",
            },
            {
                userName: "user1",
                password: "user1",
            },
        ]);
    })
    .then(function () {
        return sqliteDB("users")
            .select("*")
            .then(function (data) {
                console.log(data);
            });
    })
    .then(function () {
        return sqliteDB("users")
            .update({
                userName: "admin1",
            })
            .where("userName", "=", "admin");
    })
    .then(function () {
        return sqliteDB("users")
            .select("*")
            .then(function (data) {
                console.log(data);
            });
    })
    .then(function () {
        return sqliteDB("users").delete().where("userName", "=", "admin1");
    })
    .then(function () {
        return sqliteDB.schema.dropTableIfExists("users");
    })
    .then(function () {
        sqliteDB.destroy();
    });
