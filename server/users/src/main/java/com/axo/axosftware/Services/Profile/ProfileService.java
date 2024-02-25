package com.axo.axosftware.Services.Profile;

import java.util.List;
import java.util.Optional;

import com.axo.axosftware.Interfaces.UserProfileProjection;
import com.axo.axosftware.Models.Profile;

public interface ProfileService {

	List<Profile> findAll();

    Optional<Profile> findById(String id);

    Profile save(Profile profile);

    Optional<Profile> delete(String id);

    Optional<UserProfileProjection> findUserProfiles(String id);
}