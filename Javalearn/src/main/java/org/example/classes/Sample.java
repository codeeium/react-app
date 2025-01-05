package org.example.classes;

class Sample {
    String name;
    String location;
    int age;
    Sample(String name, String location, int age){
        this.name=name;
        this.location=location;
        this.age=age;
    }
    public static void main(String[] args) {
        Sample main = new Sample("Peter","Croydon", 33);
        System.out.println(main.name+" "+main.location+" "+main.age);
    }
}