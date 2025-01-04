package org.example;

public class ReurnValue {

    static int myMethod(int x){
        return x + 5;
    }

    static int square(int x){
        return x * x;
    }
    public static void main(String[] args) {
        System.out.println(myMethod(40));
        System.out.println(square(40));
    }
}
