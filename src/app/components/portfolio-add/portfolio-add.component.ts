import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-add',
  templateUrl: './portfolio-add.component.html',
  styleUrls: ['./portfolio-add.component.css']
})
export class PortfolioAddComponent implements OnInit {

  title: any;

  constructor(private ws: WorksService, private router: Router) { }

  ngOnInit() {
  }

  onSaveSubmit(){
      let work = {
        title: this.title,
        slug: this.getSlugTitle(this.title)
      }

      this.ws.saveWorks(work);
      this.router.navigate(['/works']);
    
  }

  private getSlugTitle(title){
    let map = {
      a : /[\xE0-\xE6]/g,
      e : /[\xE8-\xEB]/g,
      i : /[\xEC-\xEF]/g,
      o : /[\xF2-\xF6]/g,
      u : /[\xF9-\xFC]/g,
      c : /\xE7/g,
      n : /\xF1/g,
      A : /[\xC0-\xC6]/g,
      E : /[\xC8-\xCB]/g,
      I : /[\xCC-\xCF]/g,
      O : /[\xD2-\xD6]/g,
      U : /[\xD9-\xDC]/g,
      C : /\xC7/g,
      N : /\xD1/g,
      '+' : /[\xE8-\xEB&(?!amp;)]/g,
      '-' : /\s/g,
    };

    for(let letter in map){
      let er = map[letter];
      title = title.replace(er, letter);
    }
    return title.toLowerCase().trim();  
  }

}
