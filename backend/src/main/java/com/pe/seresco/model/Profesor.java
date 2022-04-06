package com.pe.seresco.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
@Table(name = "profesores")
public class Profesor {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "profesor_generator")
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "curso")
    private String curso;

    @OneToMany(mappedBy = "profesor")
    private List<Estudiante> estudiante;

    public Profesor(String nombre, String apellido, String curso){
        this.nombre = nombre;
        this.apellido = apellido;
        this.curso = curso;
    }

    public Profesor(long id, String nombre, String apellido, String curso){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.curso = curso;
    }
}
