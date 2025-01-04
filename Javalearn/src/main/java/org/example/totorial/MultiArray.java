package org.example.totorial;


import java.util.Arrays;


public class MultiArray {
    public static void main(String[] args) {
        int[][] myNumbers = {{1, 2, 3, 4}, {5, 6, 7}};

        System.out.println(myNumbers[1][2]);
        System.out.println(myNumbers.length);

        for (int i = 0; i < myNumbers.length; i++) {
            System.out.println(Arrays.toString(myNumbers[i]));
        }
    }
}


