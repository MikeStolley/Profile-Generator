const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

const outputDirectory = path.resolve(dirname, "output");
const outputPath = path.join(outputDirectory, "team.html");
const teamMembers = [];


function start() {
    managerInput();
}

managerInput = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is your team managers name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your team managers Id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your team managers email?"
        },
        {
            type: "input",
            name: "office",
            message: "What is your team managers office number?"
        }
    ])
    .then((val) => {
        const manager = new Manager (
            val.name,
            val.id,
            val.email,
            val.office
        );
        teamMembers.push(manager);
        addTeamMember();
    });
}

addTeamMember = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "Would you like to add an engineer or intern?",
            choices: ["Engineer", "Intern", "None"],
        }
    ])
    .then((val) => {
        if (val.type === "Engineer") {
            engineerQuestions();
        } else if (val.type === "Intern") {
                internQuestions();
            } else {
                createTeam();
            }
    });
}
