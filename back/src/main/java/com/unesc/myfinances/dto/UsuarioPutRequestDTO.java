package com.unesc.myfinances.dto;

import com.unesc.myfinances.entities.Usuario;

import lombok.Data;

@Data
public class UsuarioPutRequestDTO {

	private Long id;
	private String login;
	private String senha;
	private String email;
	
	public static Usuario convert(UsuarioPutRequestDTO usuDTO) {
		return convert(new Usuario(), usuDTO);
	}
	
	public static Usuario convert(Usuario usu, UsuarioPutRequestDTO usuDTO) {
		usu.setId(usuDTO.getId());
		usu.setLogin(usuDTO.getLogin());
		usu.setSenha(usuDTO.getSenha());
		usu.setEmail(usuDTO.getEmail());
		
		return usu;
	}
}