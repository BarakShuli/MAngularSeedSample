import { NgModule } from '@angular/core';
import { ChatWebSocketComponent } from './chatWebSocket.component';
import { ChatWebSocketRoutingModule } from './chatWebSocket-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [ChatWebSocketRoutingModule, SharedModule],
  declarations: [ChatWebSocketComponent],
  exports: [ChatWebSocketComponent],
  providers: [NameListService]
})
export class ChatWebSocketModule { }
