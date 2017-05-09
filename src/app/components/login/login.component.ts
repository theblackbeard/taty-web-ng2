import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  error: any;
  user: Observable<firebase.User>; 
  constructor(private router: Router, private auth: AngularFireAuth) {
      this.user = auth.authState;
  }

  ngOnInit() {
  }

/*
  createOne(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error){
      console.log(error);
    })
  }
*/
  onSubmitLogin(){
   
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error){
        if(error)return this.error = error;
      })

      this.router.navigate(['/']);

  }
}
