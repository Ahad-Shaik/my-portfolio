import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechStackComponent } from './_components/tech-stack/tech-stack.component';
import { EducationComponent } from './_components/education/education.component';
import { ContactsComponent } from './_components/contacts/contacts.component';
import { ExperienceComponent } from './_components/experience/experience.component';
import { AboutMeComponent } from './_components/about-me/about-me.component';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MyprojectsComponent } from './_components/myprojects/myprojects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    TechStackComponent,
    EducationComponent,
    ContactsComponent,
    ExperienceComponent,
    AboutMeComponent,
    MyprojectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTooltipModule,

  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

