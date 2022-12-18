package com.ecommerce.vendamais.service;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;

import com.ecommerce.vendamais.model.Email;
import com.fasterxml.jackson.databind.ObjectMapper;

public class PublishService {
    static final String queueName = "FILA_OLA_PDIST_DURAVEL";

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public String publishEmail(Email email) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            String jsonString = mapper.writeValueAsString(email);
            System.out.println(jsonString);

            String mensagem = jsonString;
            rabbitTemplate.convertAndSend(queueName,
                    mensagem);
        } catch (Exception e) {
            return e.getMessage();
        }
        return "Email publicado";
    }
}
