import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { WorksService } from './services/works.service';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'porfolio', component: PortfolioComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    NavbarComponent,
    PortfolioComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WorksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
