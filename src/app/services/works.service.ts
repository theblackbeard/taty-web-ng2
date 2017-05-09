import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database'
import * as firebase from 'firebase';

@Injectable()
export class WorksService {

  works: FirebaseListObservable<any[]>;
  work: FirebaseListObservable<any[]>;
  workOnly: FirebaseObjectObservable<any>;
  
  constructor(private db: AngularFireDatabase, private http: Http) {
      this.works = this.db.list('/works') as FirebaseListObservable<Works[]>;
  }

  getWorks(){
      return this.works;

  }


   getWork(slug) {
    
      const query = this.db.list('/works', {
       query: {
          orderByChild: 'slug',
          equalTo: slug
        }
      }) as FirebaseListObservable<Works>;
      return this.work = query;

  }  
    
  getWorkById(id){
    this.workOnly = this.db.object('/works/' +id) as FirebaseObjectObservable<Works>;
    return this.workOnly;
  }  


   saveWork(work){
         return this.works.push(work);
  
  
   }

   updateWork(id, work){
      return this.works.update(id, work);
   }


   removeWork(id){
     return this.works.remove(id);
   }
}

interface Works{
  $key?:string;
  title?:string;
  slug?:string;
}

