package Corporate_Cookies_BUILD23.OpenCare.controller;

import Corporate_Cookies_BUILD23.OpenCare.Service.MessageService;
import Corporate_Cookies_BUILD23.OpenCare.Service.ThreadsService;
import Corporate_Cookies_BUILD23.OpenCare.model.Message;
import Corporate_Cookies_BUILD23.OpenCare.model.Status;
import Corporate_Cookies_BUILD23.OpenCare.model.Threads;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController("api/formessage")
public class ChatController {
    private MessageService messageService;
    private ThreadsService threadsService;

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    private Message receivePublicMessage(@Payload Message message) {
        return message;
    }

    @MessageMapping("/private-message")
    public Message receivePrivateMessage(@Payload Message message) {
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(),"/private", message);
        return message;
    }



}
