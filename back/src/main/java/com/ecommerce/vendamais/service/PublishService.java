package com.ecommerce.vendamais.service;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.vendamais.model.Email;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.MessageProperties;

@Service
public class PublishService {
    static final String queueName = "FILA_OLA_PDIST_DURAVEL";

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public String publishEmail(Email email) throws Exception {
        ConnectionFactory connectionFactory = new ConnectionFactory();
        connectionFactory.setHost("localhost");
        connectionFactory.setPort(5672);
        connectionFactory.setUsername("mqadmin");
        connectionFactory.setPassword("Admin123XX_");

        String NOME_FILA = "FILA_OLA_PDIST_DURAVEL";

        try (
                // conexao
                Connection connection = connectionFactory.newConnection();
                // canal
                Channel canal = connection.createChannel()) {
            // criar fila
            // boolean durable, // a fila irá durar entre reinícios servidor
            // boolean exclusive, // se a fila é exclusiva
            // boolean autoDelete, // quando ninguém mais usar, será apagada
            boolean duravel = true;
            canal.queueDeclare(NOME_FILA, duravel, false, false, null);

            // enviar mensage
            // Creating the ObjectMapper object
            ObjectMapper mapper = new ObjectMapper();
            // Converting the Object to JSONString
            String jsonString = mapper.writeValueAsString(email);
            System.out.println(jsonString);

            String mensagem = jsonString;

            canal.basicPublish("", NOME_FILA, MessageProperties.PERSISTENT_TEXT_PLAIN, mensagem.getBytes());
            System.out.println("Enviada mensagem: " + mensagem);
        }
        return "Email publicado";
    }
}
