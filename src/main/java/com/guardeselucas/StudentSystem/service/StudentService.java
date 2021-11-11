package com.guardeselucas.StudentSystem.service;

import com.guardeselucas.StudentSystem.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public String deleteStudent(int id);

}
