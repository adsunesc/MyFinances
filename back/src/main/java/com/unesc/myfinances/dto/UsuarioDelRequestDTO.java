package com.unesc.myfinances.dto;

import com.unesc.myfinances.entities.Usuario;

import lombok.Data;

@Data
public class UsuarioDelRequestDTO {

	private Long id;
	
	public static Usuario convert(UsuarioDelRequestDTO usuDTO) {
		return convert(new Usuario(), usuDTO);
	}
	
	public static Usuario convert(Usuario usu, UsuarioDelRequestDTO usuDTO) {
		usu.setId(usuDTO.getId());
		
		return usu;
	}
}