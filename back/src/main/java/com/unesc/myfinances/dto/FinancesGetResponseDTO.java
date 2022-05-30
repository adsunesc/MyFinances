package com.unesc.myfinances.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import com.unesc.myfinances.entities.Finances;
import com.unesc.myfinances.entities.FinancesTipo;
import com.unesc.myfinances.entities.Situacao;
import com.unesc.myfinances.entities.Usuario;

import lombok.Data;

@Data
public class FinancesGetResponseDTO {

	private Long id;
	private String descricao;
//	private Usuario usuario;
	private Situacao situacao;
	private FinancesTipo financesTipo;
//	private Integer parcela;
//	private Integer totalParcela;
	private BigDecimal valorParcela;
//	private BigDecimal valorTotal;
	private LocalDate dataVencimento;
	
	public static FinancesGetResponseDTO convert(Finances finances) {
		FinancesGetResponseDTO finDTO = new FinancesGetResponseDTO();
		finDTO.setId(finances.getId());
		finDTO.setDescricao(finances.getDescricao());
		finDTO.setSituacao(finances.getSituacao());
		finDTO.setFinancesTipo(finances.getFinancesTipo());
		finDTO.setValorParcela(finances.getValorParcela());
		finDTO.setDataVencimento(finances.getDataVencimento());
		
		return finDTO;
	}
	
	public static List<FinancesGetResponseDTO> convertList(List<Finances> finList){
		return finList.stream().map(FinancesGetResponseDTO::convert).collect(Collectors.toList());
	}
}
