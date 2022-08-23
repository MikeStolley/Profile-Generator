const Employee = require("./employee");

// Used 'extend' to create the intern class as a child of employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }
}
module.exports = Intern;