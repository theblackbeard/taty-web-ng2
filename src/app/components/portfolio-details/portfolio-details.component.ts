import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works.service';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  slug: any;
  work: any;
  
  constructor(
    private ws: WorksService,
    private router: Router,
    private route: ActivatedRoute 

  ) { }

  ngOnInit() {
      this.slug = this.route.snapshot.params['slug'];
      this.ws.getWork(this.slug).subscribe(work => {
        this.work = work;
      })
  }

  onDelete(){
   this.ws.removeWork(this.work[0].$key);
   this.router.navigate(['/works']);
  }

}
