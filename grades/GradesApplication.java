package grades;

import java.util.HashMap;

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

    }
}
