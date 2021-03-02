const connection = require('./connection');

const orm = {
    selectAll() {
        const queryString = 'SELECT * FROM burgers WHERE devoured = false';
        connection.query(
          queryString,
          (err, result) => {
            if (err) throw err;
            console.log(result);
          }
        );
    },
    insertOne(burgerName) {
        const queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, false) ';
        connection.query(
          queryString,
          [burgerName],
          (err, result) => {
            if (err) throw err;
            console.log(result);
          }
        );
    },
    updateOne(burgerId) {
        const queryString = 'UPDATE burgers set devoured = true WHERE id=?';
        connection.query(
          queryString,
          [burgerId],
          (err, result) => {
            if (err) throw err;
            console.log(result);
          }
        );
    },
};
module.exports = orm;