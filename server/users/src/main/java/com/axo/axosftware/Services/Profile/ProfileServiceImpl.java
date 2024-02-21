package com.axo.axosftware.Services.Profile;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.axo.axosftware.Interfaces.UserProfileProjection;
import com.axo.axosftware.Models.Profile;
import com.axo.axosftware.Repositories.ProfileRepository;

@Service
public class ProfileServiceImpl implements ProfileService {

	@Autowired
	private ProfileRepository profileRepository;

	@Transactional(readOnly = true)
	@Override
	public List<Profile> findAll() {
		return (List<Profile>) profileRepository.findAll();
	}

	// Otros métodos según sea necesario

	@SuppressWarnings("null")
	@Override
	public Optional<Profile> findById(String id) {
		return profileRepository.findById(id);
	}

	@SuppressWarnings("null")
	@Override
	public Profile save(Profile profile) {
		return profileRepository.save(profile);
	}

	@SuppressWarnings("null")
	@Override
	public Optional<Profile> delete(String id) {
		Optional<Profile> profile = findById(id);
		profile.ifPresent(p -> profileRepository.delete(p));
		return profile;
	}

	@Override
	public List<UserProfileProjection> findUserProfiles() {
		return profileRepository.findUserProfiles();
	}
}
