import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatWebSocketComponent } from './chatWebSocket.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'webSocketSample', component: ChatWebSocketComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ChatWebSocketRoutingModule { }
