package com.example.demo.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import com.example.demo.entity.Kyc;


@Entity
@Table(name="Gold_table")
public class Gold {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NotNull
	@Column(name="Ornament_Type")
	private String type;
	
	@NotNull
	@Column(name="Quanity")
	private String qty;
	
	@NotNull
	@Column(name="Carat")
	private String carat;
	
	@NotNull
	@Column(name="Weigth")
	private String weight;
	
	
	@ManyToOne(cascade = CascadeType.ALL,fetch=FetchType.EAGER)
	@JoinColumn(name="Aadhar_Number",referencedColumnName = "Aadhar_Number")
	private Kyc kyc;
	
	
	public Kyc getKyc() {
		return kyc;
	}


	public void setKyc(Kyc kyc) {
		this.kyc = kyc;
	}


	public Gold() {
		super();
	}
	

	public Gold(String type, String qty, String carat, String weight) {
		super();
		this.type = type;
		this.qty = qty;
		this.carat = carat;
		this.weight = weight;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getQty() {
		return qty;
	}

	public void setQuanity(String quanity) {
		this.qty = qty;
	}

	public String getCarat() {
		return carat;
	}

	public void setCarat(String carat) {
		this.carat = carat;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}
	
	
	
}
