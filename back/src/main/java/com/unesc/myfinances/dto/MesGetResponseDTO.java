package com.unesc.myfinances.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.unesc.myfinances.entities.Mes;

import lombok.Data;

@Data
public class MesGetResponseDTO {

	private Long id;
	private Integer ano;
	private Integer numeral;
	private String descricao;
	private String tag;
	
	public static MesGetResponseDTO convert(Mes mes) {
		MesGetResponseDTO mesDTO = new MesGetResponseDTO();
		mesDTO.setId(mes.getId());
		mesDTO.setAno(mes.getAno());
		mesDTO.setNumeral(mes.getNumeral());
		mesDTO.setDescricao(mes.getDescricao());
		mesDTO.setTag(mes.getTag());
		
		return mesDTO;
	}
	
	public static List<MesGetResponseDTO> convertList(List<Mes> mesList){
		return mesList.stream().map(MesGetResponseDTO::convert).collect(Collectors.toList());
	}
}