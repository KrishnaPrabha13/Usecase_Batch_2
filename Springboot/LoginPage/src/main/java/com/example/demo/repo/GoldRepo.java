package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Gold;


public interface GoldRepo extends JpaRepository<Gold,Integer> {

}
