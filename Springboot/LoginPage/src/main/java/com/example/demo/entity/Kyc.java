package com.example.demo.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name="Kyc_table")
public class Kyc {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NotNull
	@Column(name="First_Name")
	private String fname;
	
	@NotNull
	@Column(name="Last_Name")
	private String lname;
	
	@NotNull
	@Column(name="email")
	private String email;

	@NotNull
	@Column(name="Gender")
	private String gender;
	
	@NotNull
	@Column(name="Aadhar_Number")
	private String aadhar;
	
	@NotNull
	@Column(name="Pan_Number")
	private String pan;
	
	@NotNull
	@Column(name="Phone_Number")
	private String phone;
	
		
	public Kyc()
	{
		
	}
	
	public Kyc(String fname, String lname, String email, String gender, String aadhar, String pan, String phone) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.gender = gender;
		this.aadhar = aadhar;
		this.pan = pan;
		this.phone = phone;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAadhar() {
		return aadhar;
	}

	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	
	
}
