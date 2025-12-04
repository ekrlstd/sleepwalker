package com.ekrlstd.sleepwalker;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

// This is the Spring way of telling a file it is the Controller (MVC)
@Controller
public class HomeController {
    // When a request comes to website root - this function is called
    @RequestMapping("/")
    public String index() {
        return "index.html";
    }
}
