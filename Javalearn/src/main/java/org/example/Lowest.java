package org.example;

import java.util.Arrays;

public class Lowest {

    public static void main(String[] args) {

        int ages[] = {20, 22, 18, 35, 48, 10, 87, 70};
        int minAge = ages[0];

        for (int i = 0; i < ages.length; i++) {
            if (ages[i] < minAge) {
                minAge = ages[i];
            }

        }
        System.out.println(minAge);
    }
}
/*
int minAge = ages[0]
for loop
*  i < minAge
*
* */