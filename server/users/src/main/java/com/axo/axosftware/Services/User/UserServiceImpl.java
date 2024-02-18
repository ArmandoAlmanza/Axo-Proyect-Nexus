package com.axo.axosftware.Services.User;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.axo.axosftware.Models.User;
import com.axo.axosftware.Repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;

	@Transactional(readOnly = true)
	@Override
	public List<User> findAll() {
		return (List<User>) repository.findAll();
	}

	@SuppressWarnings("null")
	@Transactional(readOnly = true)
	@Override
	public Optional<User> findById(String id) {
		return repository.findById(id);
	}

	@SuppressWarnings("null")
	@Transactional
	@Override
	public User save(User user) {
		return repository.save(user);
	}

	@SuppressWarnings("null")
	@Transactional
	@Override
	public Optional<User> delete(String id) {
		Optional<User> userOptional = repository.findById(id);
		userOptional.ifPresent(userDb -> {
			repository.delete(userDb);
		});

		return userOptional;
	}

}
