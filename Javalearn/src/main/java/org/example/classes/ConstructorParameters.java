package org.example.classes;

public class ConstructorParameters {

    String name;
    int age;
    public ConstructorParameters(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public static void main(String[] args) {
        ConstructorParameters constructorParameters =
                new ConstructorParameters("Sam", 22);
        System.out.println(
                constructorParameters.name+"-" +
                constructorParameters.age
        );
    }

}
