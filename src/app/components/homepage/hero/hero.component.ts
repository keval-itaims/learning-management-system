import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faMagnifyingGlass, faBrush, faBook, faCrown, faGraduationCap, faCloudRain, faLeaf, faFishFins} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  glass = faMagnifyingGlass;
  book = faBook;
  brush = faBrush;
  cap = faGraduationCap;
  crown = faCrown;
  fish = faFishFins;
  leaf = faLeaf;
  cloud = faCloudRain;

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
