package com.unesc.myfinances.dto;

import java.math.BigDecimal;

import com.unesc.myfinances.entities.Finances;
import com.unesc.myfinances.entities.FinancesTipo;
import com.unesc.myfinances.entities.Situacao;

import lombok.Data;

@Data
public class FinancesPostRequestDTO {

	private Long tipo;
	private String descricao;
	private BigDecimal valorParcela;
//	private Integer totalParcela;

//	@JsonFormat(pattern = "yyyy-MM-dd", shape = JsonFormat.Shape.STRING)
//	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ", shape = JsonFormat.Shape.STRING)
//	private LocalDate dataVencimento;
	
	public static Finances convert(FinancesPostRequestDTO finDTO) {
		return convert(new Finances(), finDTO);
	}
	
	public static Finances convert(Finances finances, FinancesPostRequestDTO finDTO) {
		Long sitId = new Long(1);
		Situacao sit = new Situacao();
		sit.setId(sitId);
		
		FinancesTipo fint = new FinancesTipo();
		fint.setId(finDTO.getTipo());
		
		finances.setSituacao(sit);
		finances.setFinancesTipo(fint);
		finances.setDescricao(finDTO.getDescricao());
		finances.setValorParcela(finDTO.getValorParcela());
		
		return finances;
	}
}
