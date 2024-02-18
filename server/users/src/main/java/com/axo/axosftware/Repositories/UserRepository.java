package com.axo.axosftware.Repositories;

import org.springframework.data.repository.CrudRepository;

import com.axo.axosftware.Models.Users;

public interface UserRepository extends CrudRepository<Users, String> {

}
