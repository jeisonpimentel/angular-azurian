import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
import { ExtravioComponent } from './extravio/extravio.component';
>>>>>>> 9cc46cf769059974e75fd5dee745fb58f8665c66

@NgModule({
  declarations: [
    AppComponent,
    ExtravioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
