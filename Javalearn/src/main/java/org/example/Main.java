package org.example;

public class Main {

    public static void main(String[] args) {
        String firstName = "John";
        System.out.println(firstName);
        int age = 18;
        float salary = 10000;
        System.out.println(salary);
        System.out.println(age);
        char gender = 'M';
        System.out.println(gender);

        boolean b = true;
        System.out.println(b);
        boolean b1 = false;
        System.out.println(b1);

        int myAge = 18;
        int isVotting = 18;

        if (myAge == isVotting) {
            System.out.println("Old enough to vote");
        } else {
            System.out.println("Old enough to vote");
        }

        if (20 > 30) {
            System.out.println("20 is greater th    an 30");
        } else {
            System.out.println("30 is greater than 20");
        }

        int time = 20;

        if (time < 20) {
            System.out.println("20 is greater than 20");
        } else {
            System.out.println("20 is lesser than time");
        }

        int weekday = 7;
        switch (weekday) {
            case 1:
                System.out.println("Weekday: Monday");
                break;
            case 2:
                System.out.println("Weekday: Tuesday");
                break;
            case 3:
                System.out.println("Weekday: Wednesday");
                break;
            case 4:
                System.out.println("Weekday: Thursday");
                break;
            case 5:
                System.out.println("Weekday: Friday");
                break;
            case 6:
                System.out.println("Weekday: Saturday");
                break;
            case 7:
                System.out.println("Weekday: Sunday");
                break;
            default:
        }

        int i = 0;
        while (i < 10) {
            System.out.println(i + "-" + "countUp");
            i = i + 1;
        }

        int countdown = 5;
        while (countdown > 0) {
            System.out.println(countdown + "-" + "countdown");
            countdown--;
        }

        for (int forloop = 0; forloop < 10; forloop++) {
            System.out.println(forloop + "..." + "forloop");
        }

        for (int forloop2 = 0; forloop2 < 5; forloop2++) {
            System.out.println(forloop2 + "..." + "forloop2");
        }

        for (int in = 0; in < 3; in++) {
            for (int j = 0; j < 3; j++) {
                System.out.println(in + "-" + j);
            }
        }
    }
}







