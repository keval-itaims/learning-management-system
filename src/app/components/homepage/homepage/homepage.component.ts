import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  hasLoaded: boolean = false;
  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdref.detectChanges();
  }

}
