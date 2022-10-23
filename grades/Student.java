package grades;

import java.util.ArrayList;

public class Student {

    private String name;
    private ArrayList<Integer> grades;

    public Student(String name) {
        this.name = name;
        this.grades = new ArrayList<>(grades);
    }

    public String getName(){
        return name;
    }

    public void addGrade(int grade){
        this.grades.add(grade);
    }

    public double getGradeAverage(){
        int sum = 0;
        for(int grades: grades){
            sum += grades;
        }
        return sum/grades.size();
    }
}
