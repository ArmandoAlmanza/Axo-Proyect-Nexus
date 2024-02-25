package com.axo.axosftware.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axo.axosftware.Interfaces.UserProfileProjection;
import com.axo.axosftware.Models.Profile;
import com.axo.axosftware.Services.Profile.ProfileService;

@RestController
@RequestMapping("/api/profiles")
public class ProfileController {

	@Autowired
	private ProfileService profileService;

	@GetMapping("user/{id}")
	public Optional<UserProfileProjection> profiles(@PathVariable String id) {
		return profileService.findUserProfiles(id);
	}

	@GetMapping("")
	public List<Profile> list() {
		return profileService.findAll();
	}
}
