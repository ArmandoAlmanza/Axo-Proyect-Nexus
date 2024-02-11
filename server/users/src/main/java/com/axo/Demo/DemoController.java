package com.axo.Demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/vi/demo")
@RequiredArgsConstructor
public class DemoController {

	@GetMapping("")
	public String hellloWorld() {
		return "Hello world";
	}
}
