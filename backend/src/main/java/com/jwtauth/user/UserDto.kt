package com.jwtauth.user
data class UserDto
(
      val mail: String,
      val username: String,
      val roles: MutableList<String>
)
