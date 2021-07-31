package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Gold;
import com.example.demo.entity.Kyc;
import com.example.demo.service.GoldService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/goldreq")
public class GoldController  extends BaseController
{
	@Autowired
	private GoldService  servicegold;
		
		
	@PostMapping(value="/add")
	public void saveKyc (@Valid @RequestBody Gold gold)
	{		
		servicegold.getdetails(gold);
		System.out.println(HttpStatus.OK);
		
	}
	
	@GetMapping("/users")
	public List<Gold> findAllUsers(){
		return servicegold.getdetails();
	}

}
