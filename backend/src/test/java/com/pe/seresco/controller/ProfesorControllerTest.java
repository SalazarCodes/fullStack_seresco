package com.pe.seresco.controller;

import com.pe.seresco.model.Profesor;
import com.pe.seresco.repository.ProfesorRepository;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.platform.runner.JUnitPlatform;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@RunWith(JUnitPlatform.class)
class ProfesorControllerTest {

    @Mock
    ProfesorRepository profesorRepository;

    @InjectMocks
    ProfesorController profesorController;

    @Mock
    Profesor profesor;


    @Test
    void testGetProfesores() {
        List<Profesor> prof = Arrays.asList(new Profesor("Eric","Salazar","Quimica"));

        when(profesorRepository.findAll()).thenReturn(prof);
        List<Profesor> respProf =  profesorController.getProfesores();
        Assert.assertEquals("Eric", respProf.get(0).getNombre());
    }

    @Test
    void testEditProfesores(){
        long id = 1;
        Profesor prof = new Profesor("Roberto","Quispe","Fisica");

        when(profesorRepository.findById(id)).thenReturn(Optional.of(prof));
        ResponseEntity<Profesor> resp = profesorController.getProfesorById(id);
        Assert.assertEquals("Roberto", resp.getBody().getNombre());
    }

    @Test
    void testCreateProfesores(){
        Profesor prof = new Profesor("David","Salazar","Religion");

        lenient().when(profesorRepository.save(prof)).thenReturn(prof);
        ResponseEntity<Profesor> resp = profesorController.crearProfesor(prof);
        System.out.println(resp);
        Assert.assertEquals("201 CREATED", resp.getStatusCode().toString());
    }

}