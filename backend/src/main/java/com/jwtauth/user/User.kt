package com.jwtauth.user

import com.jwtauth.role.Role
import java.util.HashSet
import javax.persistence.*

@Entity
@Table(name = "users")
data class User
(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long? = null,

    @Column(length = 50, nullable = false)
    val mail: String,

    @Column(length = 20, nullable = false)
    val username: String,

    @Column(length = 50, nullable = false)
    val password: String,

    @ManyToMany(cascade = [CascadeType.ALL])
    var roles: MutableSet<Role>? = HashSet()
)