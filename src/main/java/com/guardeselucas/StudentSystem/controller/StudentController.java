package com.guardeselucas.StudentSystem.controller;

import com.guardeselucas.StudentSystem.model.Student;
import com.guardeselucas.StudentSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "A student has been added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id ){
        studentService.deleteStudent(id);
        return  "The student has been deleted succesfully";
    }
}
