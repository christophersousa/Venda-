package ifpb.edu.br.send_email.components;

import java.util.concurrent.CountDownLatch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import ifpb.edu.br.send_email.model.Email;
import ifpb.edu.br.send_email.service.EmailService;

@Component
public class Receiver {
	@Autowired
	EmailService emailService;

	private CountDownLatch latch = new CountDownLatch(1);

	public void receiveMessage(String message) throws JsonMappingException, JsonProcessingException {
		System.out.println("Received <" + message + ">");
		ObjectMapper objectMapper = new ObjectMapper();
		Email employee = objectMapper.readValue(message, Email.class);
		emailService.sendEmailwithAttachment(employee);
		latch.countDown();
	}

	public CountDownLatch getLatch() {
		return latch;
	}

}
