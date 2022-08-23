const Employee = require("../lib/employee")
const Manager = require("../lib/manager")


test("Set the office number", () => {
    const testVar = 100;
    const e = new Manager("abc", 1, "test@gmail.com", testVar);
    expect(e.officeNumber).toBe(testVar)
});

test = () => {
    const testVar = "Manager";
    const e = new Manager("abc", 1, "test@gmail.com", 100);
    expect(e.getRole()).toBe(testVar)
};

test = () => {
    const testVar = 100;
    const e = new Manager("abc", 1, "test@gmail.com", testVar);
    expect(e.getOfficeNumber()).toBe(testVar)
};

