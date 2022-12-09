package 프로그래머스;

import java.io.Console;

public class 나누기 {

    public static void main(String[] args) {

        int answer = 0;
        double num1 = 3, num2 = 2;
        double num3 = (num1 / num2) + (num1 % num2);
        System.out.println(num1 % num2);
        answer = (int) (num3 * 1000);
        System.out.println(answer);
    }
}
