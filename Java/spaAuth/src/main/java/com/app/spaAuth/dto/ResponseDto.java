package com.app.spaAuth.dto;

import lombok.Data;

@Data
public class ResponseDto {
    String message;

    public ResponseDto(String message) {
        this.message = message;
    }
}
