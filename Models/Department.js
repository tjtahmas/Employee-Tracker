const db = require('mysql2');
const cTable = require('console.table');

class Department{
    getDepartments(){
        //Get all the departments from the database using console.table
        db.query('SELECT * FROM department', function (err, results) {
            console.table(results);
          });
    }
}

module.exports = Department;