package com.example.demo.repo;


import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.ARole;
import com.example.demo.model.Role;


@Repository
public interface RoleRepo extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ARole name);
}