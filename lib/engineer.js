const Employee = require("./employee");

// Used 'extends' to create the engineer class as a child of employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    setGithub() {
        return this.github;
    }
}

module.exports = Engineer;