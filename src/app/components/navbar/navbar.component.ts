import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>; 
  isloginFormOpen: boolean;
  email: any;
  password: any;
  error : any;

  constructor(public auth: AngularFireAuth, private router: Router) { 
    this.user = auth.authState;
    this.isloginFormOpen  = false;
  }

  ngOnInit() {
  }

  openLogin(){
    this.isloginFormOpen = true;
  }

  login(){
     firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error){
        if(error)return this.error = error;
      })
      this.isloginFormOpen = false;
  }

    
  logout() {
   firebase.auth().signOut().then(function(){
       console.log("ok")
    }, function(error){
        console.log(error);
        return false;
    })
    
  }

}
