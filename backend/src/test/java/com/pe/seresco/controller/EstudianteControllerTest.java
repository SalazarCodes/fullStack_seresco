package com.pe.seresco.controller;

import com.pe.seresco.model.Estudiante;
import com.pe.seresco.model.Profesor;
import com.pe.seresco.repository.EstudianteRepository;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.platform.runner.JUnitPlatform;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@RunWith(JUnitPlatform.class)
class EstudianteControllerTest {

    @Mock
    EstudianteRepository estudianteRepository;

    @InjectMocks
    EstudianteController estudianteController;

    @Mock
    Estudiante estudiante;

    @Test
    void testGetEstudiantes() {
        long id = 0;
        List<Estudiante> estudiantes = Arrays.
                asList(new Estudiante(id,"Eric","Salazar",
                new Profesor("Jose","Perez","Ingles")));

        when(estudianteRepository.findAll()).thenReturn(estudiantes);
        ResponseEntity<List<Estudiante>> respEstudiante = estudianteController.getEstudiantes();
        Assert.assertEquals("Eric", respEstudiante.getBody().get(0).getNombre());
    }

    @Test
    void testEditEstudiante() {
        long id = 1;
        Estudiante estudiante = new Estudiante(id,"Eric","Salazar",
                new Profesor("Jose","Perez","Ingles"));

        when(estudianteRepository.findById(id)).thenReturn(Optional.of(estudiante));
        ResponseEntity<Estudiante> resp = estudianteController.getEstudiantebyId(id);
        Assert.assertEquals("Salazar", resp.getBody().getApellido());
    }
}