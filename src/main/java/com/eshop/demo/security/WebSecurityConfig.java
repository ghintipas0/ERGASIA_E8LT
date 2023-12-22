package com.eshop.demo.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;

@Configuration
public class WebSecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.csrf(csrf->csrf.disable());
        //http.addFilterBefore(jwtRequestFilter, AuthorizationFilter.class);
        http.authorizeRequests()
                .requestMatchers("/products/").permitAll()
                .requestMatchers("/auth/register").permitAll()
                .anyRequest().authenticated();
        return http.build();


    }
}
