class Main {
    study() {
        console.log('This need to be implemented')
    }
}

class Student extends Main {
    study() {
        console.log('I study')
    }
    name = 'John'
    age = 33
}

const student = new Student()
student.study()
console.log(student.name +" - " + student.age)