import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { ContentComponent } from './content/content.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    SpecialityComponent,
    ContentComponent,
    NewsComponent,
    HomeComponent,
    DepartmentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
