const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
const { start } = require("repl")

const outputDirectory = path.resolve(dirname, "output");
const outputPath = path.join(outputDirectory, "team.html");
const teamMembers = [];


start = () => {
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
            name: "officeNumber",
            message: "What is your team managers office number?"
        }
    ])
    .then((val) => {
        const manager = new Manager (
            val.name,
            val.id,
            val.email,
            val.officeNumber
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

engineerQuestions = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter your engineers name",
        },
        {
            type: "input",
            name: "id",
            message: "Enter your engineers ID: ",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your engineers email address",
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineers GitHub Username?",
        },
    ])
    .then((val) => {
        const engineer = new Engineer(val.name, val.id, val.email, val.github);
        teamMembers.push(engineer);
        addTeamMember();
    });
}

internQuestions = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter your interns name",
        },
        {
            type: "input",
            name: "id",
            message: "Enter your interns ID: ",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your interns email",
        },
        {
            type: "input",
            name: "school",
            message: "What school does your intern attend?",
        },
    ])
    .then((val) => {
        const intern = new Intern(val.name, val.id, val.email, val.school);
        teamMembers.push(intern);
        addTeamMember();
    });
}

// Utilize exsistsSync to return whether or not a path exsists, and if not, create one

createDoc = () => {
    if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory);
    } else {
        fs.writeFileSync(outputPath, render(teamMembers), "UTF-8");
    }
}

start();
