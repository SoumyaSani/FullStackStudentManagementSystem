package com.projectApi.repo;

import com.projectApi.register.RegisterForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RegisterRepository extends JpaRepository<RegisterForm,Long> {
    Optional<RegisterForm> findByUserId(Long userId);
    Optional<RegisterForm> findByEmailAndPassword(String email,String password);


}
