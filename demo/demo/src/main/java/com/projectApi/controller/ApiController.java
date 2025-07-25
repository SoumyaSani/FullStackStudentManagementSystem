package com.projectApi.controller;

import com.projectApi.register.RegisterForm;
import com.projectApi.repo.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ApiController {


    @Autowired
    private RegisterRepository registerRepository;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/hobbies")
    public  String[] hobbies()
    {
        return new String[]{"Gaming","REading","Dance","Singing"};
    }


    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/qualification")
    public  String[] qualification()
    {
        return new String[]{"UG","PG"};
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/ug")
    public  String[] ug()
    {
        return new String[]{"BSC","BTECH","BCA"};
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/pg")
    public  String[] pg()
    {
        return new String[]{"MSC","MCA","MTECH"};
    }



//http://localhost:8080/register
@CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/register")
    public RegisterForm registerUser(@RequestBody RegisterForm registerForm) {


        return registerRepository.save(registerForm);
    }


@CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getAll")
    public List<RegisterForm> getAll() {
    return registerRepository.findAll();
  }

@CrossOrigin(origins = "http://localhost:5173")
    @PutMapping("/edit/{userId}")
    public Optional<RegisterForm> updateForm(@RequestBody RegisterForm updatedForm, @PathVariable Long userId) {
        return registerRepository.findByUserId(userId).map(user ->
        {
            user.setFirstName(updatedForm.getFirstName());
            user.setLastName(updatedForm.getLastName());
            user.setEmail(updatedForm.getEmail());
            user.setAge(updatedForm.getAge());
            user.setCourse(updatedForm.getCourse());
            user.setQualification(updatedForm.getQualification());
            user.setHobbies(updatedForm.getHobbies());
            user.setAbout(updatedForm.getAbout());
            user.setPassword(updatedForm.getPassword());
            user.setConfirmPassword(updatedForm.getConfirmPassword());
            user.setProfilePhoto(updatedForm.getProfilePhoto());
            user.setProfilePhotoBase64(updatedForm.getProfilePhotoBase64());
            registerRepository.save(user);
            return user;
        });
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/edit/{userId}")
    public Optional<RegisterForm> getUserById(@PathVariable Long userId) {
        return registerRepository.findByUserId(userId);
    }


    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping ("/delete/{userId}")
    public void deleteRecord(@PathVariable Long userId) {
       registerRepository.deleteById(userId);

    }






}





