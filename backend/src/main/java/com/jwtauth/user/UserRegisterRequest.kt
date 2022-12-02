package com.jwtauth.user
data class UserRegisterRequest
(
    val mail: String,
    val username: String,
    var password: String,
    val roles: Set<String>? = null
)
