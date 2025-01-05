package org.example.classes;


class PrintHello {
    public void printHello() {
        System.out.println("Hello");
    }
    public static void main(String[] args) {
        PrintHello printHello = new PrintHello();
        printHello.printHello();
    }
}