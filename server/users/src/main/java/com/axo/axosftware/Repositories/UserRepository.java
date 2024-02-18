package com.axo.axosftware.Repositories;

import org.springframework.data.repository.CrudRepository;

import com.axo.axosftware.Models.User;

public interface UserRepository extends CrudRepository<User, String> {

}
