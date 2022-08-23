const Employee = require("./employee");

// Used 'extend' to create the manager class as a child of employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;