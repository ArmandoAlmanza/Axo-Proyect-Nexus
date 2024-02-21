package com.axo.axosftware.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.axo.axosftware.Interfaces.UserProfileProjection;
import com.axo.axosftware.Models.Profile;

public interface ProfileRepository extends CrudRepository<Profile, String> {

	@Query("select u.name as name, u.email as email, p.birthdate as birthdate, p.img as img from Profile p join p.user_id u")
	List<UserProfileProjection> findUserProfiles();

}
