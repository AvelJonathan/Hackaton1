import { PlayersService } from './players.service';
// Module from Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Module for Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FightComponent } from './fight/fight.component';
import { TestComponent } from './test/test.component';
import { ApiService } from './api.service';

const appRoutes: Routes = [
  { path: '', component: TestComponent },
  { path: 'fight', component: FightComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FightComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ApiService, PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
