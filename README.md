# Employee Tracker
## Description

The Employee Tracker is a SQL Database, Inquirer driven management tool that allows you to view, add, and update employee information. The motivation for this project was to use database management tools in order to easily interact with employee information. This project was built to demonstrate how employees' information could be retireved, added, and edited inside a SQL database. I utilized my knowledge of SQL queries, Inquirer prompts, and models to create this project.

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
To install the Employee Tracker, first download the files from the Github repo, open a terminal inside the appropriate folder, and run "npm install" (or just install inquirer and fs).
Run the SQL files (either in a MySQL shell or inside Workbench). 

## Usage
![Screenshot](Assets\Screenshot.png)


To begin creating your team, enter "node index.js" in the terminal. You'll be presented with a list of actions you can take. You can view each table indepently, add to each table, or update an employee's information. Once selecting one of these options, follow the given prompts (being careful to add information that follows the database's format). Once you finish a prompt successfully, you will return to the starting menu to select a new action. Once you have completed all your actions, select "Exit" to end the program. 

## Credits
The Github repository resides at https://github.com/tjtahmas/Employee-Tracker

You can contact me with any questions or comments about the project at tjtahmas@gmail.com

## License

MIT License

Copyright (c) 2021 Thomas Tahmassebi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
---