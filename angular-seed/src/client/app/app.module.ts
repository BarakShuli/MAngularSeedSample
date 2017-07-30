import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { BootstrapSampleModule } from './bootstrapSample/bootstrapSample.module';
import { RestApiSampleModule } from './restApiSample/restApiSample.module';
import { ChatWebSocketModule } from './chatWebSocket/chatWebSocket.module';
import { CesiumSampleModule } from './cesiumSample/cesiumSample.module';



@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, HomeModule, 
            BootstrapSampleModule, RestApiSampleModule, ChatWebSocketModule, CesiumSampleModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
