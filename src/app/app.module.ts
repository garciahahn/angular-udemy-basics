import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { FailalertComponent } from './failalert/failalert.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { InfoalertComponent } from './infoalert/infoalert.component';
import { InputAssignmentComponent } from './input-assignment/input-assignment.component';
import { IncrementButtonComponent } from './increment-button/increment-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    FailalertComponent,
    SuccessalertComponent,
    WarningalertComponent,
    InfoalertComponent,
    InputAssignmentComponent,
    IncrementButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 