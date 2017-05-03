import { Component, OnInit } from '@angular/core';

import { WorksService } from '../../services/works.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  works:any;
  constructor(private ws: WorksService) { }

  ngOnInit() {
    this.ws.getWorks().subscribe(works => {
      console.log(works);
      this.works = works;
    })

  }




}
