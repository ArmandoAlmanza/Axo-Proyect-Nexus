package com.axoserver.auth;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@PostMapping("login")
	public String login() {
		return "Login succesfull";
	}

	@PostMapping("register")
	public String register() {
		return "You can register";
	}

}
