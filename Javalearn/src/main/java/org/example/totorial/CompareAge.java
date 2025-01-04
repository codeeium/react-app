package org.example.totorial;

public  class CompareAge {


    static void checkAge(int age) {

        if (age <= 18) {
            System.out.println("Access denied you are no old enough");
        }else if (age >= 18 ) {
            System.out.println("Access Granted");
        }
    }

    public static void main(String[] args) {
            checkAge(18);
            checkAge(30);
            checkAge(10);
    }
}

