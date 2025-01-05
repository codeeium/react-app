package org.example.mod;

abstract class Main {

    public String fname  = "John";
    public int age = 33;
    public abstract void study();
}

class Student extends Main {
    public void study() {
        System.out.println("Student study");
    }
    public int graduateyear = 2020;
}
class secondclass {
    public static void main(String[] args) {
        Student student = new Student();
        student.study();
        System.out.println(student.graduateyear+student.fname+student.age);

    }
}

