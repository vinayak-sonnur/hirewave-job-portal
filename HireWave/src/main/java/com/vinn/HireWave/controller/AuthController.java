package com.vinn.HireWave.controller;

import com.vinn.HireWave.model.User;
import com.vinn.HireWave.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // hash password
        user.setRole("USER");
        return userRepo.save(user);
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {
        User dbUser = userRepo.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        return Map.of(
                "message", "Login successful",
                "role", dbUser.getRole()
        );
    }
}