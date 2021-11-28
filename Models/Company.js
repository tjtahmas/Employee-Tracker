const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const Department = require('./Department');
const Role = require('./Role');
const Employee = require('./Employee');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL Username
      user: 'root',
      // TODO: Add MySQL Password
      password: 'root',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );

class Company {
    async manageCompany() {
        await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'functionChoice',
                    message: '\nWhat would you like to do?',
                    choices: ['View All Departments',
                              'View All Roles', 
                              'View All Employees', 
                              'Add a Department',
                              'Add a Role', 
                              'Add an Employee', 
                              'Update Employee Role',
                              'Exit'],
                },
            ])
            .then(val => {
                if (val.functionChoice == 'View All Departments'){
                    //get departments from database
                    console.info('Here are your departments');
                    this.getDepartments();
                    //this.manageCompany();
                } else if (val.functionChoice == 'View All Roles'){
                    //get all roles from database
                    console.info('Here are your roles');
                    this.getRoles();
                    //this.manageCompany();
                } else if (val.functionChoice == 'View All Employees'){
                    //get all employees from database
                    console.info('Here are your employees');
                    this.getEmployees();
                    //this.manageCompany();
                } else if (val.functionChoice == 'Add a Department'){
                    console.info('Here comes a new Department!');
                    this.addDepartment();
                    //this.manageCompany();
                } else if (val.functionChoice == 'Add a Role'){
                    console.info('Here comes a new Role!');
                    this.addRole();
                } else if (val.functionChoice == 'Add an Employee'){
                    console.info('Here comes a new Employee!');
                    this.addEmployee();
                } else if (val.functionChoice == 'Update Employee Role'){
                    console.info('What is new with this guy?!');
                    this.updateEmployee();
                } else if (val.functionChoice == 'Exit'){
                    this.quit();
                }
            })
    }
    getDepartments(){
        //Get all the departments from the database using console.table
        db.query('SELECT * FROM department', function (err, results) {
            console.log('\n -------------------------')
            console.table(results);
          });
          this.manageCompany();
    }
    getRoles(){
        //Get all the departments from the database using console.table
        db.query('SELECT * FROM role', function (err, results) {
            console.log('\n -------------------------')
            console.table(results);
          });
          this.manageCompany();
    }
    getEmployees(){
        //Get all the departments from the database using console.table
        db.query('SELECT * FROM employee', function (err, results) {
            console.log('\n -------------------------')
            console.table(results);
          });
          this.manageCompany();
    }
    async addDepartment(){
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'newDepartment',
                    message: 'Input the name of the new Department:'
                }
            ])
            .then(val => {
                db.query(`INSERT INTO department (name)
                VALUES ("${val.newDepartment}");`);
                console.info('New Department successfully added!');
            })
            this.manageCompany();
    }
    async addRole(){
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'newRole',
                    message: 'Input the title of the new Role:',
                },
                {
                    type: 'input',
                    name: 'newSalary',
                    message: 'Input the salary of the new Role:',
                },
                {
                    type: 'input',
                    name: 'newDepartmentID',
                    message: 'Input the Department ID of the new Role:',
                }
            ])
            .then(val => {
                db.query(`INSERT INTO role (title, salary, department_id)
                VALUES ("${val.newRole}", "${val.newSalary}", "${val.newDepartmentID}");`);
                console.info('New Role successfully added!');
            })
            this.manageCompany();
    }
    addEmployee(){
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'newFirstName',
                    message: 'Input the First Name of the new Employee:',
                },
                {
                    type: 'input',
                    name: 'newLastName',
                    message: 'Input the Last Name of the new Employee:',
                },
                {
                    type: 'input',
                    name: 'newRoleID',
                    message: 'Input the Role ID of the new Employee:',
                },
                {
                    type: 'input',
                    name: 'newManagerID',
                    message: 'Input the Manager ID of the new Employee:',
                }
            ])
            .then(val => {
                if (val.newManagerID == ''){
                    console.log('IN HERE!');
                    console.log(val.newManagerID);
                    val.newManagerID = null;
                } else {
                    val.newManagerID = `"${val.newManagerID}"`;
                };
                db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES ("${val.newFirstName}", "${val.newLastName}", "${val.newRoleID}", ${val.newManagerID});`);
                console.info('New Employee successfully added!');
                console.log(this)
                this.manageCompany();
            })
    }
    updateEmployee(){
        //console.log(this)
        //const currentCompany = this;
        db.query(`SELECT id, first_name, last_name FROM employee;`, function(err, results){
            const employeeNames = results.map(employee => (
                {
                    value: employee.id,
                    name: employee.first_name + ' ' + employee.last_name,
                }
            ))
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'chosenEmployee',
                        message: 'Choose an employee to update:',
                        choices: employeeNames,

                    }
                ])
                .then(val => {
                    console.log(val);
                    db.query(`SELECT id, title FROM role;`, function(err, results){
                        let roleTitle = results.map(role => (
                            {
                                value: role.id,
                                name: role.title,
                            }
                        ))
                        inquirer
                            .prompt([
                                {
                                    type: 'list',
                                    name: 'newRole',
                                    message: 'Choose a new role for the employee:',
                                    choices: roleTitle,
                                }
                            ])
                            .then(roleVal => {
                                console.log(roleVal);
                                db.query(`UPDATE employee SET role_id = ? WHERE id = ?;`, [roleVal.newRole, val.chosenEmployee], function(err, results){
                                    if (err){
                                        throw err;
                                    }
                                    console.log('Successfully Updated!');
                                })
                            })
                    })
                    //currentCompany.manageCompany();   
                    this.manageCompany();                 
                })
        })
    }
    quit() {
        console.log('\nGoodbye!');
        process.exit(0);
    }
}

module.exports = Company;