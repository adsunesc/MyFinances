package com.unesc.myfinances.controllers;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unesc.myfinances.dto.UsuarioGetResponseDTO;
import com.unesc.myfinances.dto.UsuarioPostRequestDTO;
import com.unesc.myfinances.dto.UsuarioPutRequestDTO;
import com.unesc.myfinances.entities.Usuario;
import com.unesc.myfinances.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioService usuService;
	
	@GetMapping
	public ResponseEntity<List<UsuarioGetResponseDTO>> list(){
		List<Usuario> usuarioList = usuService.findAll();
		
		List<UsuarioGetResponseDTO> resList = UsuarioGetResponseDTO.convertList(usuarioList);
		return ResponseEntity.ok(resList);
	}
	
	@PostMapping
	public ResponseEntity<UsuarioGetResponseDTO> create(@RequestBody UsuarioPostRequestDTO usuarioDTO) throws ParseException{
		Usuario usuario = UsuarioPostRequestDTO.convert(usuarioDTO);
		
		usuService.save(usuario);
		
		return ResponseEntity.ok(UsuarioGetResponseDTO.convert(usuario));
	}
	
	@PutMapping
	public ResponseEntity<UsuarioGetResponseDTO> update(@RequestBody UsuarioPutRequestDTO usuarioDTO) throws ParseException{
		Usuario usuario = UsuarioPutRequestDTO.convert(usuarioDTO);
		
		usuService.update(usuario);
		
		return ResponseEntity.ok(UsuarioGetResponseDTO.convert(usuario));
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Long> delete(@PathVariable Long id) throws ParseException{
		usuService.deleteById(id);
		
		return new ResponseEntity<>(id, HttpStatus.OK);
	}
}
