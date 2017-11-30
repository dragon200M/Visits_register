package app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by maciej on 22.07.17.
 */
@Controller
public class IndexController {

    @RequestMapping("/2222")
    public String home(){
        return  "index";
    }
}
