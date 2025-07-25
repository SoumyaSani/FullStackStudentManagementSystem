package com.projectApi.controller;


import com.projectApi.register.LoginPage;
import com.projectApi.register.RegisterForm;
import com.projectApi.repo.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class LoginPageController {

    @Autowired
    private RegisterRepository registerRepository;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/login")
    public ResponseEntity<?> request(@RequestBody LoginPage loginRequest){

        Optional<RegisterForm> result =
                registerRepository.findByEmailAndPassword(loginRequest
                        .getEmail(),loginRequest.getPassword());
        System.out.println(result);
        if (result.isPresent()) {
            return ResponseEntity.ok(result); // Return full user info (optional: remove password)
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }


    }
}
