package com.axo.axosftware.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axo.axosftware.Models.User;
import com.axo.axosftware.Services.User.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("")
	public List<User> list() {
		return userService.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> view(@PathVariable String id) {
		Optional<User> userOptional = userService.findById(id);
		if (userOptional.isPresent()) {
			return ResponseEntity.ok(userOptional.orElseThrow());
		}
		return ResponseEntity.notFound().build();
	}

	@PostMapping("")
	public ResponseEntity<User> create(@RequestBody User user) {
		User newUser = userService.save(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
	}

	@PutMapping("/{id}")
	public ResponseEntity<User> update(@PathVariable String id, @RequestBody User user) {
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable String id) {
		Optional<User> userOptional = userService.delete(id);
		if (userOptional.isPresent()) {
			return ResponseEntity.ok(userOptional.orElseThrow());
		}
		return ResponseEntity.notFound().build();
	}
}
