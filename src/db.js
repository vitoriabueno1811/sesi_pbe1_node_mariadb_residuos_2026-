const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Gestao_residuos'
});

connection.connect((err) => {
    if (err) {
        console.error("Erro:", err);
        return;
    }
    console.log("Back-end respondendo!");
});

module.exports = connection;