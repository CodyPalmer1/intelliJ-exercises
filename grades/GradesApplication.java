package grades;

import java.util.HashMap;
import java.util.Scanner;

public class GradesApplication {
    public static void main(String[] args) {
        HashMap<String, Object> students = new HashMap<>();
        Student cody = new Student("Cody");
        cody.addGrade(90);
        cody.addGrade(95);
        cody.addGrade(100);

        Student james = new Student("James");
        cody.addGrade(80);
        cody.addGrade(85);
        cody.addGrade(90);

        Student charles = new Student("Charles");
        cody.addGrade(70);
        cody.addGrade(75);
        cody.addGrade(80);

        Student martin = new Student("Martin");
        cody.addGrade(60);
        cody.addGrade(65);
        cody.addGrade(70);

        students.put("CodyPalmer1", cody);
        students.put("KingJames", james);
        students.put("MrCharles", charles);
        students.put("LameMartin", martin);

        System.out.println("Welcome!");
        System.out.println();
        System.out.println("Here are the GitHub usernames of our students:");
        System.out.println();
        System.out.println("|CodyPalmer1|  |KingJames|  |MrCharles|  |LameMartin|");

        boolean userContinue = false;
        do {
            Scanner scanner = new Scanner(System.in);
            System.out.println("What student would you like to see more information on?");
            String student = scanner.nextLine();

            if (student.equalsIgnoreCase("CodyPalmer1")) {
                System.out.printf("Name: %s%n", cody.getName());
                System.out.printf("Github username: CodyPalmer1%n");
                System.out.printf("Current average: %.2f%n", cody.getGradeAverage());
                System.out.println();
            } else if (student.equalsIgnoreCase("KingJames")) {
                System.out.printf("Name: %s%n", james.getName());
                System.out.printf("Github username: KingJames%n");
                System.out.printf("Current average: %.2f%n", james.getGradeAverage());
                System.out.println();
            } else if (student.equalsIgnoreCase("MrCharles")) {
                System.out.printf("NAME: %s%n", charles.getName());
                System.out.printf("Github username: MrCharles%n");
                System.out.printf("Current average: %.2f%n", charles.getGradeAverage());
                System.out.println();
            } else if (student.equalsIgnoreCase("LameMartin")) {
                System.out.printf("Name: %s%n", martin.getName());
                System.out.printf("Github username: LameMartin%n");
                System.out.printf("Current average: %.2f%n", martin.getGradeAverage());
                System.out.println();
            } else if (!student.equalsIgnoreCase("CodyPalmer1") || !student.equalsIgnoreCase("KingJames") || !student.equalsIgnoreCase("MrCharles") || !student.equalsIgnoreCase("LameMartin")) {
                System.out.printf("Sorry, no student found with the GitHub username of \"%s\"%n", student);
            }

            System.out.println("Would you like to see another student?");
            String anotherStudent = scanner.nextLine();
            if (anotherStudent.equalsIgnoreCase("y") || anotherStudent.equalsIgnoreCase("yes")) {
                userContinue = true;
            } else if (anotherStudent.equalsIgnoreCase("n") || anotherStudent.equalsIgnoreCase("no")) {
                userContinue = false;
                System.out.println("Goodbye, and have a wonderful day!");
            }
        } while (userContinue);
    }
}
