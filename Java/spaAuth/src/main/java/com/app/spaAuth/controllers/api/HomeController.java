package com.app.spaAuth.controllers.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.spaAuth.dto.ResponseDto;

@RestController
public class HomeController {

    @GetMapping("/")
    public ResponseEntity<ResponseDto> index() {

        ResponseDto response = new ResponseDto("zxc");

        return ResponseEntity.ok(response);
    }
}
