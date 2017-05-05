import { Component, OnInit } from '@angular/core';

import { WorksService } from '../../services/works.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  errorMessage: string;
  works:any;
  mode = 'Observable';
  
  constructor(private ws: WorksService) { }


  ngOnInit() {
    this.ws.getWorks().subscribe(works=> {
      this.works = works;
    })
    
  }



}
