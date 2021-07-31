package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Login;
import com.example.demo.repo.LoginRepo;

@Service
public class LoginService  implements LoginInterface{
	
	@Autowired 
	private LoginRepo loginRepo;
	
	
	public void getdetails (Login login) {
		loginRepo.save(login);
	}

}
