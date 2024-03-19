package com.eshop.demo.security;
import com.eshop.demo.DAO.RoleDAO;
import com.eshop.demo.DAO.UserDAO;
import com.eshop.demo.entity.Role;
import com.eshop.demo.entity.User;
import com.eshop.demo.service.JWTService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Optional;

@Component
public class JWTRequestFilter extends OncePerRequestFilter{
    private final JWTService jwtService;
    private final UserDAO userDAO;
    private final RoleDAO roleDAO;

    @Autowired
    public JWTRequestFilter(JWTService jwtService,UserDAO userDAO,RoleDAO roleDAO) {
        this.jwtService = jwtService;
        this.userDAO=userDAO;
        this.roleDAO=roleDAO;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String tokenHeader = request.getHeader("Authorization");
        if (tokenHeader != null && tokenHeader.startsWith("Bearer ")) {
            String token = tokenHeader.substring(7);
            String username = jwtService.getUsername(token);
            Optional<User> opUser = userDAO.findByUsernameIgnoreCase(username);
            if (opUser.isPresent()) {
                User user = opUser.get();
                Optional<Role> roles = roleDAO.findByUsernameIgnoreCase(user.getUsername());
                if(roles.isPresent()) {
                    Role role = roles.get();
                    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>(role.getAuthorities()));
                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }
            }
        }
        filterChain.doFilter(request, response);
    }
}
