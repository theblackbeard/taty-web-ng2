import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works.service';
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
      slug: this.getSlugTitle(this.title)
    }
    this.ws.updateWork(this.id, work);
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
      '-' : /\s/g,
    };

    for(let letter in map){
      let er = map[letter];
      title = title.replace(er, letter);
    }
    return title.toLowerCase().trim();  
  }

}
