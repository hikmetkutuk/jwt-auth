package com.jwtauth.role
import javax.persistence.*

@Entity
@Table(name = "roles")
data class Role
(
    @Id
    @GeneratedValue(strategy =  GenerationType.AUTO)
    val id: Long? = null,

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    val name: ERole
)