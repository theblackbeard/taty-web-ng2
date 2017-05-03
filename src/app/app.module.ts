import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { WorksService } from './services/works.service';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioAddComponent } from './components/portfolio-add/portfolio-add.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'works', component: PortfolioComponent},
  {path: 'works/new', component: PortfolioAddComponent}
]

var firebaseConfig = {
    apiKey: "AIzaSyAGPQplRaT-69ZLwVfvDi7Vl6wOIMu3LDU",
    authDomain: "taty-d7e75.firebaseapp.com",
    databaseURL: "https://taty-d7e75.firebaseio.com",
    projectId: "taty-d7e75",
    storageBucket: "taty-d7e75.appspot.com",
    messagingSenderId: "1011082192729"
  };

  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,  
    NavbarComponent,
    PortfolioComponent,
    HeaderComponent,
    PortfolioAddComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [WorksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
