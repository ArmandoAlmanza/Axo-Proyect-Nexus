package com.axo.axosftware.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.axo.axosftware.Interfaces.UserProfileProjection;
import com.axo.axosftware.Models.Profile;

public interface ProfileRepository extends CrudRepository<Profile, String> {

	@Query(value = "SELECT * FROM get_user_info(?1)", nativeQuery = true)
	Optional<UserProfileProjection> findUserProfiles(String email);

}
