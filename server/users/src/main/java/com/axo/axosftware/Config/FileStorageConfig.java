package com.axo.axosftware.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;

@Configuration
public class FileStorageConfig {

    @Bean(name = "multipartResolver")
    StandardServletMultipartResolver multipartResolver() {
		return new StandardServletMultipartResolver();
	}
}
