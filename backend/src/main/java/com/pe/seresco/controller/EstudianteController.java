package com.pe.seresco.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import com.pe.seresco.model.Estudiante;
import com.pe.seresco.repository.EstudianteRepository;
import com.pe.seresco.repository.ProfesorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8081", "http://localhost:8080"})
@RestController
@RequestMapping("/api")
public class EstudianteController {

    @Autowired
    private ProfesorRepository profesorRepository;

    @Autowired
    private EstudianteRepository estudianteRepository;

    @GetMapping("/estudiantes")
    public ResponseEntity<List<Estudiante>> getEstudiantes(){
        List<Estudiante> estudiante = new ArrayList<>();
        estudianteRepository.findAll().forEach(estudiante::add);

        if(estudiante.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(estudiante, HttpStatus.OK);
    }

    @GetMapping("profesores/{profesorId}/estudiantes")
    public ResponseEntity<List<Estudiante>> getEstudiantesPorProfesor(@PathVariable("profesorId") Long profesorId){
            if(!profesorRepository.existsById(profesorId)){
                throw new ResourceNotFoundException("No se encontro profesor con id " + profesorId);
            }
            List<Estudiante> estudiantes = estudianteRepository.findByProfesorId(profesorId);
            return new ResponseEntity<>(estudiantes, HttpStatus.OK);
    }

    @GetMapping("/estudiantes/{id}")
    public ResponseEntity<Estudiante> getEstudiantebyId(@PathVariable (value = "id") Long id){

        Estudiante estudiante = estudianteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontro estudiante con id " + id));
        return new ResponseEntity<>(estudiante, HttpStatus.OK);
    }

    @PostMapping("/profesores/{profesorId}/estudiantes")
    public ResponseEntity<Estudiante> createEstudiante(@PathVariable(value = "profesorId") Long profesorId,
                                                      @RequestBody Estudiante estudianteRequest){
        Estudiante estudiante = profesorRepository.findById(profesorId).map(profesor -> {
            estudianteRequest.setProfesor(profesor);
            return estudianteRepository.save(estudianteRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("No se encontro al profesor con ID " + profesorId));
        return new ResponseEntity<>(estudiante, HttpStatus.CREATED);
    }

    @PutMapping("/estudiantes/{id}")
    public ResponseEntity<Estudiante> updateEstudiante(@PathVariable("id") long id,
                                                       @RequestBody Estudiante estudianteRequest){
        Estudiante estudiante = estudianteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontro estudiante con id " + id));

        estudiante.setNombre(estudianteRequest.getNombre());
        estudiante.setApellido(estudianteRequest.getApellido());
        estudiante.setProfesor(estudiante.getProfesor());

        return new ResponseEntity<>(estudianteRepository.save(estudiante), HttpStatus.OK);
    }

    @DeleteMapping("/estudiantes/{id}")
    public ResponseEntity<HttpStatus> deleteEstudiante(@PathVariable("id") long id){
        estudianteRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
