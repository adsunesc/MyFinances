package com.unesc.myfinances.dto;

import java.math.BigDecimal;

import com.unesc.myfinances.entities.Finances;
import com.unesc.myfinances.entities.FinancesTipo;
import com.unesc.myfinances.entities.Situacao;

import lombok.Data;

@Data
public class FinancesPutRequestDTO {

	private Long id;
	private Long tipo;
	private String descricao;
	private BigDecimal valorParcela;
//	private Integer totalParcela;

//	@JsonFormat(pattern = "yyyy-MM-dd", shape = JsonFormat.Shape.STRING)
//	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ", shape = JsonFormat.Shape.STRING)
//	private LocalDate dataVencimento;
	
	public static Finances convert(FinancesPutRequestDTO finDTO) {
		return convert(new Finances(), finDTO);
	}
	
	public static Finances convert(Finances finances, FinancesPutRequestDTO finDTO) {
		Long sitId = new Long(1);
		Situacao sit = new Situacao();
		sit.setId(sitId);
		
		FinancesTipo fint = new FinancesTipo();
		fint.setId(finDTO.getTipo());
		
		finances.setId(finDTO.getId());
		finances.setDescricao(finDTO.getDescricao());
		finances.setSituacao(sit);
		finances.setFinancesTipo(fint);
		finances.setValorParcela(finDTO.getValorParcela());
		
		return finances;
	}
}
