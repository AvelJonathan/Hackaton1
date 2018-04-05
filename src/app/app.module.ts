// Module from Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Module for Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FightComponent } from './fight/fight.component';

const appRoutes: Routes = [
  { path: 'fight',  component: FightComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FightComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
