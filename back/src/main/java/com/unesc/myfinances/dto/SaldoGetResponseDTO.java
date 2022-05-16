package com.unesc.myfinances.dto;

import lombok.Data;

@Data
public class SaldoGetResponseDTO {

	private Integer valor;
	private Integer tipo;
	
	public static SaldoGetResponseDTO convert(Integer valor, Integer tipo) {
		SaldoGetResponseDTO usuDTO = new SaldoGetResponseDTO();
		usuDTO.setValor(valor);
		usuDTO.setTipo(tipo);
		
		return usuDTO;
	}
	
//	public static List<SaldoGetResponseDTO> convertList(List<Usuario> usuList){
//		return usuList.stream().map(SaldoGetResponseDTO::convert).collect(Collectors.toList());
//	}
}
