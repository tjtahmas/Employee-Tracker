const inquirer = require('inquirer');
const db = require('mysql2');
const cTable = require('console.table');
const Department = require('./Department');
const Role = require('./Role');
const Employee = require('./Employee');

class Company {
    buildCompany() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'functionChoice',
                    message: 'What would you like to do?',
                    choices: ['View All Departments',
                              'View All Roles', 
                              'View All Employees', 
                              'Add a Role', 
                              'Add an Employee', 
                              'Update an Employee'],
                },
            ])
            .then(val => {
                if (val.functionChoice == 'View All Departments'){
                    //get departments from database
                } else if (val.functionChoice == 'View All Roles'){
                    //get all roles from database
                } else if (val.functionChoice == 'View All Employees'){
                    //get all employees from database
                }
            })
    }



    quit() {
        console.log('\nGoodbye!');
        process.exit(0);
    }
}

module.exports = Company;