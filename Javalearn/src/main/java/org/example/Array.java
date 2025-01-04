package org.example;

public class Array {

    public static void main(String[] args) {

        int[] age = {1,2,3,4,5};

        float avg,sum = 0;

        int length = age.length;

        for (int i =0; i<length; i++) {
            System.out.print(age[i]+" ");
            sum += age[i];
        }
        avg = sum/length;
        System.out.println("The average age is :"+avg);
    }
}
