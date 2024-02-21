package com.axo.axosftware.Services.User;

import java.util.List;
import java.util.Optional;

import com.axo.axosftware.Models.User;

public interface UserService {

	List<User> findAll();

	Optional<User> findById(String id);

	User save(User user);

	Optional<User> delete(String id);
}
