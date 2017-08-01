import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InboxComponent } from './inbox/inbox.component';
import { MessageComponent } from './message/message.component';
import {EmailDataService} from "./services/email-data.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InboxComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EmailDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
