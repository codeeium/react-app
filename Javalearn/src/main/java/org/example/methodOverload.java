package org.example;

public class methodOverload {

    static int addition (int x, int y){
        return x + y;
    }
    static double addition (double x, double y){
        return x + y;
    }

    public static void main(String[] args) {

int addition = addition(10,20);
double addition1 = addition(10,20);
System.out.println(addition);
System.out.println(addition1);
    }

}
