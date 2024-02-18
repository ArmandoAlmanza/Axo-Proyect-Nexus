package com.axo.axosftware.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

	@GetMapping("user")
	public List<UserProfileProjection> profiles() {
		return profileService.findUserProfiles();
	}

	@GetMapping("")
	public List<Profile> list() {
		return profileService.findAll();
	}
}
