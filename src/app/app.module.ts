import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { FailalertComponent } from './failalert/failalert.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { InfoalertComponent } from './infoalert/infoalert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    FailalertComponent,
    SuccessalertComponent,
    WarningalertComponent,
    InfoalertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 