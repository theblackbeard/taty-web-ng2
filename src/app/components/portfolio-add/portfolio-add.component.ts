import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works.service'; 
import { HelperService } from '../../services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-add',
  templateUrl: './portfolio-add.component.html',
  styleUrls: ['./portfolio-add.component.css']
})
export class PortfolioAddComponent implements OnInit {

  title: any;

  constructor(private ws: WorksService, private helper: HelperService, private router: Router) { }

  ngOnInit() {
  }

  onSaveSubmit(){
      let work = {
        title: this.title,
        slug: this.helper.getSlug(this.title)
      }
      this.ws.saveWork(work);
      this.router.navigate(['/works']);
  }
}
