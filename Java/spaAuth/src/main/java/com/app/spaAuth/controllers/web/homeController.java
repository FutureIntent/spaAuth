package com.app.spaAuth.controllers.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class homeController {

    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

}
