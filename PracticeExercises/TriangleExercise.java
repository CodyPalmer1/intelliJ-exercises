package PracticeExercises;

import java.sql.SQLOutput;
import java.util.Objects;
import java.util.Scanner;

public class TriangleExercise {
    public static void main(String[] args) {
        triangle();
    }

    public static Double triangle(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Would you like to find the (1) Area or (2) Angles of a triangle?");
        String triangleAnswer = scanner.nextLine();
        if(Objects.equals(triangleAnswer, "1")){
            System.out.println("Do you know the height of your triangle? [Y/N]");
            String knowBase = scanner.nextLine();
            if(knowBase.equalsIgnoreCase("yes") || knowBase.equalsIgnoreCase("y")) {
                System.out.println("Please enter the base: ");
                int base = scanner.nextInt();
                System.out.println("Please enter the height: ");
                int height = scanner.nextInt();
                int triangleArea = (base * height) / 2;
                System.out.println("The area of your triangle is: " + triangleArea);
            } else if (knowBase.equalsIgnoreCase("no") || knowBase.equalsIgnoreCase("n")){
                System.out.println("Please enter the hypotenuse of your triangle: ");
                int hypotenuse = scanner.nextInt();
                System.out.println("Please enter side two of your triangle: ");
                int sideTwo = scanner.nextInt();
                System.out.println("Please enter side three of your triangle: ");
                int sideThree = scanner.nextInt();
                int s = (hypotenuse + sideTwo + sideThree)/2;
                int areaTriangle = (int) Math.sqrt((s*(s-sideTwo)*(s-sideThree)*(s-hypotenuse)));
                System.out.println(areaTriangle);
            }
        } else if(Objects.equals(triangleAnswer, "2")){
            System.out.println("Is your triangle a right triangle? [Y/N]");
            String rightTriYN = scanner.nextLine();
            if(rightTriYN.equalsIgnoreCase("yes") || rightTriYN.equalsIgnoreCase("y")) {
                System.out.println("Please enter the base: ");
                int base = scanner.nextInt();
                System.out.println("Please enter the area: ");
                int area = scanner.nextInt();
                int triangleHeight = (2 * area) / base;
                System.out.println("The area of your triangle is: " + triangleHeight);
            } else if (rightTriYN.equalsIgnoreCase("no") || rightTriYN.equalsIgnoreCase("n")){
                System.out.println("Is it a equal lateral triangle? ");
                String isEqualLateral = scanner.nextLine();
                if(isEqualLateral.equalsIgnoreCase("yes") || isEqualLateral.equalsIgnoreCase("y")){
                    System.out.println("Please enter base: ");
                    int equalLateralBase = scanner.nextInt();
                    System.out.println("Please enter base length: ");
                    int equalLateralSides = scanner.nextInt();
                    System.out.println("Please enter sides length: ");
                    System.out.println(equalLateralBase + (2 * equalLateralSides));
                }
            }
        }
        System.out.println("Are you trying to find the area of a different shape?");
        String otherAnswer = scanner.nextLine();
        if(otherAnswer.equalsIgnoreCase("yes") || otherAnswer.equalsIgnoreCase("y")){
            System.out.println("What shape are you trying to find: (1) Square, (2) Circle, (3) Rectangle");
        }
        return null;
    }
}

