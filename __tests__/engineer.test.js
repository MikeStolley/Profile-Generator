const Engineer = require("../lib/engineer")

test("create github account", () => {
    const testVar = "GitHub Username";
    const e = new Engineer("abc", 1, "test@gmail.com", testVar);
    expect(e.github).toBe(testVar)
});

test = () => {
    const testVar = "Engineer";
    const e = new Engineer("abc", 1, "test@gmail.com", "GitHub Username");
    expect(e.getRole()).toBe(testVar)
};

test = () => {
    const testVar = "GitHub Username";
    const e = new Engineer("abc", 1, "test@gmail.com", testVar);
    expect(e.getGithub()).toBe(testVar)
};


