package com.unesc.myfinances.controllers;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unesc.myfinances.dto.MesGetResponseDTO;
import com.unesc.myfinances.dto.MesPostRequestDTO;
import com.unesc.myfinances.entities.Mes;
import com.unesc.myfinances.service.MesService;

@RestController
@RequestMapping("/mes")
public class MesController {

	@Autowired
	private MesService mesService;
	
	@GetMapping
	public ResponseEntity<List<MesGetResponseDTO>> list(){
		List<Mes> mesTemp = new ArrayList<Mes>();
		List<Mes> mesList = mesService.findAll();
		for(int i = 0 ; i < 2 ; i++) {
			Mes mes = mesList.get(i);
			mesTemp.add(mes);
		}
		
		List<MesGetResponseDTO> resList = MesGetResponseDTO.convertList(mesTemp);
		return ResponseEntity.ok(resList);
	}
	
	@PostMapping
	public ResponseEntity<MesGetResponseDTO> create(@RequestBody MesPostRequestDTO mesDTO) throws ParseException{
		Mes mes = MesPostRequestDTO.convert(mesDTO);
		
		mesService.save(mes);
		
		return ResponseEntity.ok(MesGetResponseDTO.convert(mes));
	}
}
