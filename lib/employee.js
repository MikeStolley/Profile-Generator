// Used constructor to create an object instance for name, id, and email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";

    }
    
    setName() {
        return this.name;
    }

    setId() {
        return this.id;
    }

    setEmail() {
        return this.email;
    }

    setTitle() {
        return this.title;
    }
}
module.exports = Employee;