package com.app.spaAuth.responses;

import lombok.Data;

@Data
public class ResponseString {
    String message;

    public ResponseString(String message) {
        this.message = message;
    }
}
