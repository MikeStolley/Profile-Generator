const fs = require("fs")
const path = require("path")

const htmlDirectory = path.resolve(__dirname, "../html");

// function to filter the parent class and push which role is chosen
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
// Use readFileSync in order to read the file, and return its contents.
const createManager = (manager) => {
    let htmlOutline = fs.readFileSync(
        path.resolve(htmlDirectory, "manager.html")
    );
    htmlOutline = replacePlaceholder(htmlOutline, "name", manager.getName())
    htmlOutline = replacePlaceholder(htmlOutline, "role", manager.getRole())
    htmlOutline = replacePlaceholder(htmlOutline, "email", manager.getEmail())
    htmlOutline = replacePlaceholder(htmlOutline, "id", manager.getId())
    htmlOutline = replacePlaceholder(htmlOutline, "officeNumber", manager.getOfficeNumber())
    return htmlOutline;
};

const createIntern = (intern) => {
    let htmlOutline = fs.readFileSync(
        path.resolve(htmlDirectory, "intern.html")
    );
    htmlOutline = replacePlaceholder(htmlOutline, "name", intern.getName())
    htmlOutline = replacePlaceholder(htmlOutline, "role", intern.getRole())
    htmlOutline = replacePlaceholder(htmlOutline, "email", intern.getEmail())
    htmlOutline = replacePlaceholder(htmlOutline, "id", intern.getId())
    htmlOutline = replacePlaceholder(htmlOutline, "school", intern.getSchool())
    return htmlOutline;
};

const createEngineer = (engineer) => {
    let htmlOutline = fs.readFileSync(
        path.resolve(htmlDirectory, "engineer.html")
    );
    htmlOutline = replacePlaceholder(htmlOutline, "name", engineer.getName())
    htmlOutline = replacePlaceholder(htmlOutline, "role", engineer.getRole())
    htmlOutline = replacePlaceholder(htmlOutline, "email", engineer.getEmail())
    htmlOutline = replacePlaceholder(htmlOutline, "id", engineer.getId())
    htmlOutline = replacePlaceholder(htmlOutline, "github", engineer.getGithub())
    return htmlOutline;
};

const createMainHtml = (html) => {
    const htmlOutline = fs.readFileSync(
        path.resolve(htmlDirectory, "index.html")
    )
    return replacePlaceholder(htmlOutline, "team", html);
};

const replacePlaceholder = (htmlOutline, placeholder, value) => {
    const design = new RegExp("{{ " + placeholder + " }}", "gm");
    return htmlOutline.replace(design, value);
};

module.exports = create;