// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }
    getGithub(){
        inquirer.prompt([
            {
                type:"input",
                message:"what is your github user",
                name:"github"
            }.then(data =>{
                return data;
            })
        ])
    };
    getRole();
}
module.exports = Engineer;