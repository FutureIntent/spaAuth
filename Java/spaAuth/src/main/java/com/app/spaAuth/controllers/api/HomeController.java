package com.app.spaAuth.controllers.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.spaAuth.responses.ResponseString;

@RestController
public class HomeController {

    @GetMapping("/")
    public ResponseEntity<ResponseString> index() {

        ResponseString response = new ResponseString("zxc");

        return ResponseEntity.ok(response);
    }
}
