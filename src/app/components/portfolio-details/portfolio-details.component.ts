import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  slug: any;
  work: any;
  user: Observable<firebase.User>;

  
  constructor(
    private ws: WorksService,
    private router: Router,
    private route: ActivatedRoute, 
    private auth: AngularFireAuth

  ) {

    this.user = auth.authState;
   }

  ngOnInit() {
      this.slug = this.route.snapshot.params['slug'];
      this.ws.getWork(this.slug).subscribe(work => {
        this.work = work;
      })
  }


  deteleThis(){
    this.ws.removeWork(this.work[0].$key);
      this.router.navigate(['/works']);
  }

}
