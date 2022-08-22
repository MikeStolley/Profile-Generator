const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

const outputDirectory = path.resolve(dirname, "output");
const outputPath = path.join(outputDirectory, "team.html");
const teamMembers = [];

