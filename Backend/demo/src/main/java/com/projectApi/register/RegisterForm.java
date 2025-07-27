package com.projectApi.register;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import java.util.List;


@Entity
@Data
@Getter
@Setter
public class RegisterForm {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;


    private String firstName;
    private String LastName;
    private String email;
    private String qualification;
    private String course;
    private int age;
    private String about;
    private String password;
    private String confirmPassword;
    private List<String> hobbies;
    private String profilePhoto;
    @Lob
    private String profilePhotoBase64;

}
