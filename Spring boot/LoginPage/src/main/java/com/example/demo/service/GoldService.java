package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Gold;
import com.example.demo.entity.Kyc;
import com.example.demo.repo.GoldRepo;


@Service
public class GoldService implements GoldInterface {

	
	@Autowired 
	private GoldRepo goldRepo;
	
	
	public void getdetails (Gold gold) {
	    Kyc kyc=new Kyc("Ram","a","ram@gmail.com","male","1432 2857 4568 ","ABCDE1234F", "9999999999");
	    
	    gold.setKyc(kyc);
	    
		goldRepo.save(gold);
	}
	

	public List<Gold> getdetails(){
		return goldRepo.findAll();
	}
	
	public Optional<Gold> getUserById(int id) {
		
		return goldRepo.findById(id);
	}

}
