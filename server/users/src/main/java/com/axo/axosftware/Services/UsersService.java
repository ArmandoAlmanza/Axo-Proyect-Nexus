package com.axo.axosftware.Services;

import java.util.List;
import java.util.Optional;

import com.axo.axosftware.Models.Users;

public interface UsersService {

	List<Users> findAll();

	Optional<Users> findById(String id);

	Users save(Users user);

	Optional<Users> delete(Users user);
}
