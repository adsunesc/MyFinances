package com.unesc.myfinances.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.unesc.myfinances.entities.Finances;
import com.unesc.myfinances.repositories.FinancesRepository;

@Service
public class FinancesService {

	@Autowired
	private FinancesRepository finRepo;
	
	@Transactional(readOnly = false)
	public void save(Finances finances) {
		finRepo.save(finances);
	}

	@Transactional(readOnly = false)
	public void update(Finances finances) {
		finRepo.save(finances);
	}
	
	@Transactional(readOnly = true)
	public Finances getById(Long id) {
		Finances finances = finRepo.getById(id);
		return finances;
	}
	
	@Transactional(readOnly = false)
	public void deleteById(Long id) {
		finRepo.deleteById(id);
	}
	
	@Transactional(readOnly = true)
	public List<Finances> findAll() {
		List<Finances> financesList = finRepo.findAll(); 
		return financesList;
	}
}
