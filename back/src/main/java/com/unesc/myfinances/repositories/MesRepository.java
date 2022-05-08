package com.unesc.myfinances.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.unesc.myfinances.entities.Mes;

@Repository
public interface MesRepository extends JpaRepository<Mes, Long>{

}