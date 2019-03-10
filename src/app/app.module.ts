import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { UserServiceService } from './user-service.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserDetailsComponent } from './user-details/user-details.component';






@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,MatIconModule,MatButtonModule,MatSidenavModule,MatToolbarModule,
    MatSelectModule,MatChipsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
