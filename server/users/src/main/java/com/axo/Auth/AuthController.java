package com.axo.Auth;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

	@PostMapping("login")
	public String login() {
		return "you are logged";
	}

	@PostMapping("register")
	public String register() {
		return "you are registered";
	}

}
