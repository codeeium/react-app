export {}

type name = string;
type age = number;
class Main {
    name;
    age;
    constructor(name:name,age:age) {
     this.name = name;
     this.age = age;
       }
    info() {
        return {name: this.name, age: this.age}
    }
}

const main = new Main('Ivan', 20)
console.log(main.info())