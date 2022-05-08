package com.unesc.myfinances.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.unesc.myfinances.entities.Mes;
import com.unesc.myfinances.repositories.MesRepository;

@Service
public class MesService {

	@Autowired
	private MesRepository mesRepo;
	
	@Transactional(readOnly = true)
	public void save(Mes mes) {
		mesRepo.save(mes);
	}
	
	@Transactional(readOnly = true)
	public Mes getById(Long id) {
		Mes mes = mesRepo.getById(id);
		return mes;
	}
	
	@Transactional(readOnly = true)
	public List<Mes> findAll() {
		List<Mes> mesList = mesRepo.findAll(); 
		return mesList;
	}
}