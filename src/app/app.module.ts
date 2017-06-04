import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, PreloadAllModules } from '@angular/router';

import { ROUTES } from './app.routes';

import { HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, HomeComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {

  }
}
