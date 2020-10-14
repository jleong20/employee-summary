// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        for (var key in this) {
            console.log(`${key}: ${this[key]}`);
          }
    };
    getId(){
        for (var key in this) {
            console.log(`${key}: ${this[key]}`);
          }
    };
    getEmail(){
        for (var key in this) {
            console.log(`${key}: ${this[key]}`);
          }
    };
    getRole(){
        for (var key in this) {
            console.log(`${key}: ${this[key]}`);
          }
    };
    
}
