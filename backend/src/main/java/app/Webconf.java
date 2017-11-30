package app;

import org.h2.server.web.WebServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by maciej on 10.08.17.
 */
@Configuration
public class Webconf  {
    @Bean
    ServletRegistrationBean h2servletRegistr() {
        ServletRegistrationBean registrationBean = new ServletRegistrationBean(
                new WebServlet());
        registrationBean.addUrlMappings("/console/*");

        return registrationBean;

    }


}
