package com.unesc.myfinances.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "mes")
public class Mes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "mes_id")
	private Long id;

	@Column(name = "mes_ano", nullable = false, length = 120, unique = false)
	private Integer ano;

	@Column(name = "mes_numeral", nullable = false, length = 120, unique = false)
	private Integer numeral;
	
	@Column(name = "mes_descricao", nullable = true, length = 120, unique = false)
	private String descricao;
	
	@Column(name = "mes_tag", nullable = true, length = 120, unique = false)
	private String tag;
	
}