
package com.eshop.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class WebSecurityConfig {
    private JWTRequestFilter jwtRequestFilter;

    @Autowired
    public WebSecurityConfig(JWTRequestFilter jwtRequestFilter) {
        this.jwtRequestFilter = jwtRequestFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.csrf(csrf->csrf.disable());
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
        http.authorizeRequests()
                .requestMatchers("/auth/login","/auth/register","/ShopNow","/Products","/Products/{productId}","/ShopNow/{categoryId}","/ShopNow/search","/ShopNow/profile").permitAll()
                .requestMatchers("/cart").authenticated();
                //.requestMatchers("/Products").hasRole("ADMIN");
        return http.build();


    }
}

