const Intern = require("../lib/intern");

test("Set school for intern", () => {
    const testVar = "UNC-CH";
    const e = new Intern("abc", 1, "test@gmail.com", testVar);
    expect(e.school).toBe(testVar)
});

test = () => {
    const testVar = "Intern";
    const e = new Intern("abc", 1, "test@gmail.com", "UNC-CH");
    expect(e.getRole()).toBe(testVar)
};

test = () => {
    const testVar = "UNC-CH";
    const e = new Intern("abc", 1, "test@gmail.com", testVar);
    expect(e.getSchool()).toBe(testVar)
};