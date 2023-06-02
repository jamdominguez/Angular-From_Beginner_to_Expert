import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClassesComponent } from './components/classes/classes.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { GnSwitchComponent } from './components/gn-switch/gn-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClassesComponent,
    HighlightedDirective,
    GnSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
