import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database'
import * as firebase from 'firebase';

@Injectable()
export class WorksService {

  works: FirebaseListObservable<any[]>;
  work: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) {
      this.works = this.db.list('/works') as FirebaseListObservable<Works[]>;
   }

   getWorks(){
     return this.works;
   }


   saveWorks(work){
     // let ref = firebase.database().ref('/works');
      //return ref.push(work);
   }
}

interface Works{
  $key?:string;
  title?:string;
  slug?:string
}

