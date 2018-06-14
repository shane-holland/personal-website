import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';


import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { HomeComponent } from './views/home/home.component';
import { ConstructionComponent } from './views/construction/construction.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ResumeComponent } from './views/resume/resume.component';
import { ContactMeComponent } from './views/contact-me/contact-me.component';
import { FooterComponent } from './uiComponents/footer/footer.component';
import { NavDrawerComponent } from './uiComponents/nav-drawer/nav-drawer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConstructionComponent,
    NotFoundComponent,
    AboutMeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactMeComponent,
    FooterComponent,
    NavDrawerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    appRouting,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
