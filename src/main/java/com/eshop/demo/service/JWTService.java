package com.eshop.demo.service;
import com.eshop.demo.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.websocket.server.ServerEndpoint;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.Jwts;
import java.util.Date;

@Service
public class JWTService {
    @Value("${jwt.algorithm.key}")
    private String algorithmKey;
    @Value("${jwt.issuer}")
    private String issuer;
    @Value("${jwt.expiryInSeconds}")
    private int expireInSeconds;



    public String generateToken(User localUser) {
        return Jwts.builder()
                .setSubject(localUser.getUsername())
                .signWith(SignatureAlgorithm.HS256, algorithmKey)
                .setExpiration(new Date(System.currentTimeMillis()+(1000 * expireInSeconds)))
                .setIssuer(issuer)
                .compact();
    }

    public String getUsername(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(algorithmKey)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

}
