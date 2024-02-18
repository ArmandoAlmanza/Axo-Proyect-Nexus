package com.axo.axosftware.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.axo.axosftware.Models.Users;
import com.axo.axosftware.Repositories.UserRepository;

@Service
public class UsersServiceImpl implements UsersService {

	@Autowired
	private UserRepository repository;

	@Transactional(readOnly = true)
	@Override
	public List<Users> findAll() {
		return (List<Users>) repository.findAll();
	}

	@SuppressWarnings("null")
	@Transactional(readOnly = true)
	@Override
	public Optional<Users> findById(String id) {
		return repository.findById(id);
	}

	@SuppressWarnings("null")
	@Transactional
	@Override
	public Users save(Users user) {
		return repository.save(user);
	}

	@SuppressWarnings("null")
	@Transactional
	@Override
	public Optional<Users> delete(Users user) {
		Optional<Users> userOptional = repository.findById(user.getId());
		userOptional.ifPresent(userDb -> {
			repository.delete(userDb);
		});

		return userOptional;
	}

}
