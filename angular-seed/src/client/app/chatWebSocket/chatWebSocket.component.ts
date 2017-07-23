import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './services/chatWebSocket.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-chatWebSocket',
  templateUrl: 'chatWebSocket.component.html',
  styleUrls: ['chatWebSocket.component.css'],
  providers: [ChatService]
})
export class ChatWebSocketComponent implements OnInit, OnDestroy {
  
  messages:any  = [];
  connection:any;
  message:any;

  constructor(private chatService: ChatService) { }

  sendMessage() {
    console.log("this.message ", this.message);
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
