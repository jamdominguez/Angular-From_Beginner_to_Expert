import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AppRoutingModule } from './app.routes';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';
import { HeroesFilteredComponent } from './components/heroes-filtered/heroes-filtered.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeDetailComponent,
    HeroesFilteredComponent,
    HeroeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
