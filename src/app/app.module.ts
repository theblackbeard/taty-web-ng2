import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { WorksService } from './services/works.service';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioAddComponent } from './components/portfolio-add/portfolio-add.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'works', component: PortfolioComponent},
  {path: 'works/new', component: PortfolioAddComponent},
  {path: 'work/:slug', component: PortfolioDetailsComponent},
  {path: 'work/edit/:id', component: PortfolioEditComponent}
]

export const firebaseConfig = {
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
    PortfolioDetailsComponent,
    PortfolioEditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [WorksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
