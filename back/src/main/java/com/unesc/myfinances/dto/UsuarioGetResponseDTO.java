package com.unesc.myfinances.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.unesc.myfinances.entities.Situacao;
import com.unesc.myfinances.entities.Usuario;

import lombok.Data;

@Data
public class UsuarioGetResponseDTO {

	private Long id;
	private String login;
	private String senha;
	private String email;
	private String apelido;
	private Situacao situacao;
	
	public static UsuarioGetResponseDTO convert(Usuario usuario) {
		UsuarioGetResponseDTO usuDTO = new UsuarioGetResponseDTO();
		usuDTO.setId(usuario.getId());
		usuDTO.setLogin(usuario.getLogin());
		usuDTO.setSenha(usuario.getSenha());
		usuDTO.setEmail(usuario.getEmail());
		usuDTO.setApelido(usuario.getApelido());
		usuDTO.setSituacao(usuario.getSituacao());
		
		return usuDTO;
	}
	
	public static List<UsuarioGetResponseDTO> convertList(List<Usuario> usuList){
		return usuList.stream().map(UsuarioGetResponseDTO::convert).collect(Collectors.toList());
	}
}
