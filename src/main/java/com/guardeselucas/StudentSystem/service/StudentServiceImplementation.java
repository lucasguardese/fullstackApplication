package com.guardeselucas.StudentSystem.service;

import com.guardeselucas.StudentSystem.model.Student;
import com.guardeselucas.StudentSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImplementation implements StudentService{

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public String deleteStudent(int id) {
        studentRepository.deleteById(id);
        return "The student has been deleted succesfully";
    }
}
