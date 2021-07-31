package com.example.demo.service;

import java.util.List;

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
	    Kyc kyc=new Kyc("Ram","a","ram@gmail.com","male","1234 1244 1274 ","ABCDE1234F", "9999999999");
	    gold.setKyc(kyc);
	    
		goldRepo.save(gold);
	}

	public List<Gold> getdetails(){
		return goldRepo.findAll();
	}

}
