package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Kyc;
import com.example.demo.repo.KycRepo;


@Service
public class KycService implements KycInterface
{
	@Autowired 
	private KycRepo kycRepo;
	
	
	public void getdetails (Kyc kyc) {
		kycRepo.save(kyc);
	}
	
	public List<Kyc> getdetails(){
		return kycRepo.findAll();
	}

}
