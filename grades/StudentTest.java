package grades;

public class StudentTest {
    public static void main(String[] args) {
        Student cody = new Student("Cody");
        cody.addGrade(90);
        cody.addGrade(95);
        cody.addGrade(100);

        Student james = new Student("James");
        james.addGrade(80);
        james.addGrade(85);
        james.addGrade(90);

        System.out.println(cody.getGradeAverage());
        System.out.println(james.getGradeAverage());

    }
}
