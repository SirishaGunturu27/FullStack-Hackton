package com.blog.controller;

import org.springframework.web.bind.annotation.*;
import com.blog.entity.User;
import com.blog.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final UserRepository repo;

    public AuthController(UserRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {

        // 🔥 remove spaces
        String username = user.getUsername().trim();
        String password = user.getPassword().trim();

        System.out.println("USERNAME: " + username);
        System.out.println("PASSWORD: " + password);

        // 🔍 find user
        User found = repo.findByUsername(username);

        if (found == null) {
            throw new RuntimeException("User not found");
        }

        // 🔐 check password
        if (!found.getPassword().equals(password)) {
            throw new RuntimeException("Wrong password");
        }

        System.out.println("LOGIN SUCCESS ✅");

        return found;
    }
}