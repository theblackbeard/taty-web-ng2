import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works.service';
import { HelperService } from '../../services/helper.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-portfolio-edit',
  templateUrl: './portfolio-edit.component.html',
  styleUrls: ['./portfolio-edit.component.css']
})
export class PortfolioEditComponent implements OnInit {

  id: any;
  title: any;
  
  constructor(
      private ws: WorksService,
      private helper: HelperService,
      private router: Router, 
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.ws.getWorkById(this.id).subscribe(work => {
      this.title = work.title
    })

  }

  onUpdateSubmit(){
    let work = {
      title: this.title,
      slug: this.helper.getSlug(this.title)
    }
    this.ws.updateWork(this.id, work);
    this.router.navigate(['/works']);
    }

}
