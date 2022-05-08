package com.unesc.myfinances.dto;

import com.unesc.myfinances.entities.Mes;

import lombok.Data;

@Data
public class MesPostRequestDTO {

	private Integer ano;
	private Integer numeral;
	private String descricao;
	private String tag;
	
	public static Mes convert(MesPostRequestDTO mesDTO) {
		return convert(new Mes(), mesDTO);
	}
	
	public static Mes convert(Mes mes, MesPostRequestDTO mesDTO) {
		mes.setAno(mesDTO.getAno());
		mes.setNumeral(mesDTO.getNumeral());
		mes.setDescricao(mesDTO.getDescricao());
		mes.setTag(mesDTO.getTag());
		
		return mes;
	}
}