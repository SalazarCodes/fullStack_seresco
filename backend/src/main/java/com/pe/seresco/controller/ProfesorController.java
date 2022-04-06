package com.pe.seresco.controller;


import com.google.common.collect.ImmutableList;
import com.pe.seresco.model.Profesor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.pe.seresco.repository.ProfesorRepository;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8081", "http://localhost:8080"})
@RestController
@RequestMapping("/api")
public class ProfesorController {

    @Autowired
    ProfesorRepository profesorRepository;

    @GetMapping("/profesores")
    public List<Profesor> getProfesores(){
        List<Profesor> profesor = new ArrayList<Profesor>();
        return ImmutableList.copyOf(profesorRepository.findAll());

        //return new ResponseEntity<>(profesor, HttpStatus.OK);
    }

    @GetMapping("/profesores/{id}")
    public ResponseEntity<Profesor> getProfesorById(@PathVariable("id") long id){
        Profesor profesor = profesorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontro profesor con id " + id));
        return new ResponseEntity<>(profesor, HttpStatus.OK);
    }

    @PostMapping("/profesores")
    public ResponseEntity<Profesor> crearProfesor(@RequestBody Profesor profesor){
        Profesor _profesor = profesorRepository.save(new Profesor(profesor.getNombre(), profesor.getApellido(), profesor.getCurso()));
        return new ResponseEntity<>(_profesor, HttpStatus.CREATED);
    }

    @PutMapping("profesores/{id}")
    public ResponseEntity<Profesor> editProfesor(@PathVariable("id") long id, @RequestBody Profesor profesor){
        Profesor _profesor = profesorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró profesor con id " + id));
        _profesor.setNombre(profesor.getNombre());
        _profesor.setApellido(profesor.getApellido());
        _profesor.setCurso(profesor.getCurso());

        return new ResponseEntity<>(profesorRepository.save(_profesor), HttpStatus.OK);
    }

    @DeleteMapping("profesores/{id}")
    public ResponseEntity<HttpStatus> deleteProfesor(@PathVariable("id") long id){
        profesorRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
