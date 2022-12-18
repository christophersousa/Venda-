package ifpb.edu.br.send_email.service;

import java.math.BigDecimal;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import ifpb.edu.br.send_email.model.Email;
import ifpb.edu.br.send_email.model.ProdutoEmail;
import ifpb.edu.br.send_email.model.UserEmail;

@Service
public class PublishService {

    static final String queueName = "FILA_OLA_PDIST_DURAVEL";

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public String publishEmail() {
        UserEmail user = new UserEmail();
        user.setEmail("christophersousa2468@gmail.com");
        user.setUsername("Christopher Silva de Sousa");

        ProdutoEmail produto = new ProdutoEmail();
        produto.setEstoque(8);
        produto.setNome("Smartphone");
        produto.setValor(new BigDecimal(1800));

        Email email = new Email();
        email.setEmail("christophersousa2468@gmail.com");
        email.setNome("Christopher");
        email.setUser(user);
        email.setProduto(produto);

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
