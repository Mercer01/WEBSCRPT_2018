const mysql = require('mysql2/promise');
const config = require('./config.json');



async function saveCar(reg, make, model, year, price) {
    const sql = await init();
    const insertQuery = sql.format('INSERT INTO Car SET ? ;', {
        reg: reg,
        make: make,
        model: model,
        car_year: year,
        price: price
    });
    await sql.query(insertQuery);
}

async function getAveragePrice(year) {
    const sql = await init();
    const query = sql.format("SELECT AVG(price) as avg from Car where car_year = ?;", (year))
    const [rows] = await sql.query(query);
    return rows[0].avg;
}



// create one connection to the database
let sqlPromise = null;

async function init() {
    if (sqlPromise) return sqlPromise;

    sqlPromise = newConnection();
    return sqlPromise;
}

async function shutDown() {
    if (!sqlPromise) return;
    const stashed = sqlPromise;
    sqlPromise = null;
    await releaseConnection(await stashed);
}

async function newConnection() {
    // todo: this should really use connection pools
    const sql = await mysql.createConnection(config.mysql);

    // handle unexpected errors by just logging them
    sql.on('error', (err) => {
        console.error(err);
        sql.end();
    });

    return sql;
}

async function releaseConnection(connection) {
    await connection.end();
}


// for debugging, we should log unhandled promise rejections
process.on('unhandledRejection', console.error);



module.exports = {
    saveCar: saveCar,
    getAveragePrice: getAveragePrice,
    shutdown: shutDown
}