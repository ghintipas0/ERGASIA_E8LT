package com.eshop.demo.service;

import com.eshop.demo.DAO.RoleDAO;
import com.eshop.demo.entity.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {
    private RoleDAO roleDAO;

    @Autowired
    public RoleService(RoleDAO roleDAO) {
        this.roleDAO = roleDAO;
    }

    public Role addRole(Role role){
        return roleDAO.save(role);

    }
}
