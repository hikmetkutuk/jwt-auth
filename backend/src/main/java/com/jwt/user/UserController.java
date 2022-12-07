package com.jwt.user;

import com.jwt.role.RoleToUserRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController
{
    private final UserService userService;

    public UserController(UserService userService)
    {
        this.userService = userService;
    }

    @PostMapping("/create")
    public ResponseEntity<User> saveUser(@RequestBody UserRegisterRequest userRequest)
    {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/create").toUriString());
        return ResponseEntity.created(uri).body(userService.saveUser(userRequest));
    }

    @PostMapping("/add-role")
    public ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserRequest roleToUserRequest)
    {
        userService.addRoleToUser(roleToUserRequest.getUsername(), roleToUserRequest.getRoleName());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/list")
    public ResponseEntity<List<User>> getUsers()
    {
        return ResponseEntity.ok().body(userService.getUsers());
    }


}
