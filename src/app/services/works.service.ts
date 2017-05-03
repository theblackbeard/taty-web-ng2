import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class WorksService {

  works: FirebaseListObservable<any[]>;
  work: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
      this.works = this.af.database.list('/works') as FirebaseListObservable<Works[]>;
   }

   getWorks(){
     return this.works;
   }


   saveWorks(work){
      let ref = firebase.database().ref('/works');
      return ref.push(work);
   }
}

interface Works{
  $key?:string;
  title?:string;
  slug?:string
}

