package com.unesc.myfinances.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.unesc.myfinances.entities.Finances;

import lombok.Data;

@Data
public class FinancesPostRequestDTO {

	private String descricao;
//	private Usuario usuario;
	private Long tipo;
	private Integer parcela;
	private Integer totalParcela;
	private BigDecimal valorParcela;
	private BigDecimal valorTotal;

	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ", shape = JsonFormat.Shape.STRING)
	private LocalDate dataVencimento;
	
	public static Finances convert(FinancesPostRequestDTO finDTO) {
		return convert(new Finances(), finDTO);
	}
	
	public static Finances convert(Finances finances, FinancesPostRequestDTO finDTO) {
		Long sitId = (long) 1;
		
		finances.setDescricao(finDTO.getDescricao());
//		finances.setUsuario(finDTO.getUsuario());
		finances.getSituacao().setId(sitId);
		finances.getFinancesTipo().setId(finDTO.getTipo());
		finances.setParcela(finDTO.getParcela());
		finances.setTotalParcela(finDTO.getTotalParcela());
		finances.setValorParcela(finDTO.getValorParcela());
		finances.setValorTotal(finDTO.getValorTotal());
		finances.setDataVencimento(finDTO.getDataVencimento());
		
		return finances;
	}
}
