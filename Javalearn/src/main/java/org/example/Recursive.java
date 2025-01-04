package org.example;

public class Recursive {

    public static int sum(int k, int n) {
        if (n > k) {
            return n + sum(k,n - 1);
        }else {
            return 0;
        }
    }

    public static void main(String[] args) {
        System.out.println(sum(4,5));
    }
}
