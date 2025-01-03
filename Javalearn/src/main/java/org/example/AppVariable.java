package org.example;

public class AppVariable {

    public static void main(String[] args) {

        String firstName = "Jagan";
        System.out.println("First Name: " + firstName);

        String name = "John Doe";
        System.out.println(name);
        int age = 20;
        System.out.println(age);
        age = 35;
        System.out.println(age);
        int myNum = 35;
        System.out.println(myNum);
        float myFloat = 35.5f;
        char myChar = 'A';
        System.out.println(myFloat);
        System.out.println(myChar);

        // Good
        int minutesPerHour = 60;
        System.out.println(minutesPerHour);

// OK, but not so easy to understand what m actually is
        int m = 60;
        System.out.println(m);
    }
}





