package ifpb.edu.br.send_email.service;

import java.io.File;
import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import ifpb.edu.br.send_email.model.Email;
import ifpb.edu.br.send_email.model.ProdutoEmail;
import ifpb.edu.br.send_email.model.UserEmail;
import jakarta.mail.BodyPart;
import jakarta.mail.internet.MimeBodyPart;
import jakarta.mail.internet.MimeMessage;
import jakarta.mail.internet.MimeMultipart;

@Service
public class EmailService {

    @Autowired
    JavaMailSender javaMailSender;

    public String sendEmail(Email email) {
        SimpleMailMessage message = new SimpleMailMessage();
        System.out.println("Recebi esse dado:" + email.toString());
        message.setFrom("christopher.silva@academico.ifpb.edu.br");
        message.setTo(email.getEmail());
        message.setSubject(
                "Seu produto: " + email.getProduto().getNome() + " foi adquirido por: "
                        + email.getUser().getUsername());
        message.setText(
                "Dados do produto:" +
                        "\nNome do produto: " + email.getProduto().getNome() +
                        "\nValor do produto: " + email.getProduto().getValor() +
                        "\nEstoque remanecente: " + email.getProduto().getEstoque() +
                        "\nDados do usuarios:" +
                        "\nNome do cliente: " + email.getUser().getUsername() +
                        "\nEmail para contato: " + email.getUser().getEmail());
        javaMailSender.send(message);

        return "Mail send successfully";

    }

    public String sendEmailwithAttachment(Email email) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(message, true);

            messageHelper.setFrom("christopher.silva@academico.ifpb.edu.br", "VendaMais.com");
            messageHelper.setTo("christopher.silva@academico.ifpb.edu.br");
            message.setSubject(
                    "Seu produto: " + email.getProduto().getNome() + " foi adquirido por: "
                            + email.getUser().getUsername());
            messageHelper.setText("Here text message body Attachment");
            File file = new File("C:\\Users\\Christopher\\Pictures\\img.jpg");
            messageHelper.addAttachment(file.getName(), file);

            MimeMultipart multipart = new MimeMultipart("related");
            BodyPart messageBodyPart = new MimeBodyPart();
            String htmlText = "<H1>Compra Realizada</H1>"
                    + "<img style=\"width:20rem\" src=\"https://s2.glbimg.com/mkkhc7f10soW1JUH_6kMrx4tXdo=/284x0:1642x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/A/7/3ig3UQTKGPx5atpBhraA/a31.jpg\">"
                    +
                    "<br/><H2 style=\"margin-bottom: .15rem\">Dados do produto:</H2>" +
                    "<br/><b>Nome do produto: </b> <span>" + email.getProduto().getNome() + "</span>" +
                    "<br/><b>Valor do produto: </b> <span>" + email.getProduto().getValor() + "</span>" +
                    "<br/><b>Estoque remanecente: </b> <span>" + email.getProduto().getEstoque() + "</span>" +
                    "<br/><H2 style=\"margin-bottom: .15rem\">Dados do usuarios:</H2>" +
                    "<br/><b>Nome do cliente: </b> <span>" + email.getUser().getUsername() + "</span>" +
                    "<br/><b>Email para contato: </b> <span>" + email.getUser().getEmail() + "</span>";
            messageBodyPart.setContent(htmlText, "text/html");

            multipart.addBodyPart(messageBodyPart);
            message.setContent(multipart);
            javaMailSender.send(message);
            return "Mail(Attachment) send successfully";

        } catch (Exception e) {
            return "Mail send failed";
        }
    }

}
