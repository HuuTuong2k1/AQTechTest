import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { RootComponent } from './modules/root/root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './service/helper.service';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { InfoDetailComponent } from './modules/info-detail/info-detail.component';
import { RouterModule } from '@angular/router';
import { EducationProgramComponent } from './modules/education-program/education-program.component';
import { TuitionComponent } from './modules/tuition/tuition.component';
import { LearningResultComponent } from './modules/learning-result/learning-result.component';
import { TestScheduleComponent } from './modules/test-schedule/test-schedule.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogMarksComponent } from './modules/dialog-marks/dialog-marks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RootComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InfoDetailComponent,
    EducationProgramComponent,
    TuitionComponent,
    LearningResultComponent,
    TestScheduleComponent,
    DialogMarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
