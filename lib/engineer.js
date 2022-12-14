const Employee = require("./employee");

// Used 'extend' to create the engineer class as a child of employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;