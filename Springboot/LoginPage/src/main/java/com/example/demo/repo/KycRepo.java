package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Kyc;
import com.example.demo.entity.Login;

public interface KycRepo extends JpaRepository<Kyc,Integer>{

}
