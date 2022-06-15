import { Component, OnInit } from '@angular/core';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  glass = faMagnifyingGlass;
  constructor() { }

  ngOnInit(): void {
  }

}
