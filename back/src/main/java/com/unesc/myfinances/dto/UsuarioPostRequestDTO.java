package com.unesc.myfinances.dto;

import com.unesc.myfinances.entities.Usuario;

import lombok.Data;

@Data
public class UsuarioPostRequestDTO {

	private String login;
	private String senha;
	private String email;
	
	public static Usuario convert(UsuarioPostRequestDTO usuDTO) {
		return convert(new Usuario(), usuDTO);
	}
	
	public static Usuario convert(Usuario usu, UsuarioPostRequestDTO usuDTO) {
		usu.setLogin(usuDTO.getLogin());
		usu.setSenha(usuDTO.getSenha());
		usu.setEmail(usuDTO.getEmail());
		
		return usu;
	}
}