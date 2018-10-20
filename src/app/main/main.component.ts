import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  arr =[1,2,3,4,5,6,7,8,9,10]
  constructor() { }

  ngOnInit() {
  }

}
