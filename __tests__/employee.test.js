const Employee = require("../lib/employee");

test("Create employee card", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});                                                                                                                                         

test("constructor valid", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("get email via constructor", () => {
    const testVar = "test@gmail.com"
    const e = new Employee("abc", 1, testVar);
    expect(e.email).toBe(testVar);
});

test("get name via getName", () => {
    const testVar = "John"
    const e = new Employee(testVar);
    expect(e.getName()).toBe(testVar);
});

test("get id via constructor", () => {
    const testVar = 100;
    const e = new Employee("def", testVar);
    expect(e.id).toBe(testVar);
});

test("get id via getId", () => {
    const testVar = 100
    const e = new Employee("def", testVar);
    expect(e.getId()).toBe(testVar);
});

test("get email via getEmail", () => {
    const testVar = "test@gmail.com";
    const e = new Employee("abc", 1, testVar)
    expect(e.getEmail()).toBe(testVar);
});

test("get role via getRole", () => {
    const testVar = "Employee";
    const e = new Employee("John", 1, "test@gmail.com");
    expect(e.getRole()).toBe(testVar)
});