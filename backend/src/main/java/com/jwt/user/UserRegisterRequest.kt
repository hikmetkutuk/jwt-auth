package com.jwt.user

import com.jwt.role.Role

data class UserRegisterRequest
(
    val mail: String,
    val username: String,
    var password: String,
    val roles: Collection<Role> = ArrayList()
)
