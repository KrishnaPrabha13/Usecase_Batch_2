package com.example.demo.advice;

import java.sql.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class MyConntroller 
{
		//global exception handler
		@ExceptionHandler(Exception.class)
		public ResponseEntity<?>handleGLobalException(Exception exception,WebRequest request){
			User errordetails=new User(request.getDescription(false),exception.getMessage());
			return new ResponseEntity(errordetails,HttpStatus.NOT_FOUND);
		}
		
		
//		validation
		@ExceptionHandler(MethodArgumentNotValidException.class)
     	public ResponseEntity<?>Errorhandling(MethodArgumentNotValidException exception){
			User errordetails=new User("validation error",exception.getBindingResult().getFieldError().getDefaultMessage());
			return new ResponseEntity<>(errordetails,HttpStatus.BAD_REQUEST);
		}
}
