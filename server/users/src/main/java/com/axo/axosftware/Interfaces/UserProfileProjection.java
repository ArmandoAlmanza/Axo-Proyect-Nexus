package com.axo.axosftware.Interfaces;

import java.time.LocalDate;

public interface UserProfileProjection {
	String getName();

	String getEmail();

	LocalDate getBirthdate();

	String getImg();
}
