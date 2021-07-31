package com.example.demo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Login;
import com.example.demo.service.LoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/login")
public class LoginController extends BaseController
{
	
	@Autowired
	private LoginService service;
	
	@PostMapping(value="/add")
	public void saveUser(@Valid @RequestBody Login login)
	{
		service.getdetails(login);
		System.out.println(HttpStatus.OK);
	}

}
