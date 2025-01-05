package org.example.classes;

public class StaticPublic {

     static void staticMethod() {
         System.out.println("This is the static method");
     }
     public  void publicMethod() {
         System.out.println("This is public method");
     }

     public static void main(String[] args) {
         StaticPublic staticPublic = new StaticPublic();
         staticPublic.publicMethod();
         staticMethod();
     }
}
