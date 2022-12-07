package com.jwt.role;

import com.jwt.user.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RoleServiceImpl implements RoleService
{
    private final RoleRepository roleRepository;

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    public RoleServiceImpl(RoleRepository roleRepository)
    {
        this.roleRepository = roleRepository;
    }

    @Override
    public Role saveRole(RoleCreateRequest roleCreateRequest)
    {
        Role role = new Role
        (
            null,
            roleCreateRequest.getName()
        );

        logger.info("Saving new role {} to the database", roleCreateRequest.getName());
        return roleRepository.save(role);
    }
}
