import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  glass = faMagnifyingGlass;
  search = ''
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSearch(){
    if(!this.search.trim()) return;
    this.router.navigate(['../courses'], {relativeTo: this.route, state: {search: this.search} })
  }

}
