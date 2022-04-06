package com.pe.seresco.repository;

import com.pe.seresco.model.Profesor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfesorRepository extends JpaRepository< Profesor, Long> {
}
