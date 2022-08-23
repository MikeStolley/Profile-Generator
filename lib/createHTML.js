const fs = require("fs")
const path = require("path")

const htmlDirectory = path.resolve(__dirname, "../html");

const create = (teamMates) => {
    const htmlFile = [];

    html.push(teamMates.filter((employee) => employee.getRole() === "Manager")
    .map((manager) => createManager(manager))
    );
    html.push(teamMates.filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => createEngineer(engineer))
    );
    html.push(teamMates.filter((employee) => employee.getRole() === "Intern")
    .map((intern) => createIntern(intern))
    );

    return createMainHtml(htmlFile.join(""))

};