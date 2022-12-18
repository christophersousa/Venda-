package ifpb.edu.br.send_email.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ifpb.edu.br.send_email.service.PublishService;

@RestController
@RequestMapping("/api")
public class PublishController {

    @Autowired
    PublishService publishService;

    @GetMapping("/publish")
    public String publish() {
        return publishService.publishEmail();
    }

}
