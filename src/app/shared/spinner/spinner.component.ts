import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: '<div class="overlay"></div><div class="absolute inset-0 z-20"><div class="lds-facebook"><div></div><div></div><div></div></div>',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
