import { Component, OnInit, HostListener } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-nav-info',
  templateUrl: './nav-info.component.html',
  styleUrls: ['./nav-info.component.scss']
})
export class NavInfoComponent implements OnInit {
  scrolled:boolean = false;
  count:number = 0;
  constructor(public basket:BasketService) { }

  ngOnInit() {
    this.basket.count.subscribe(
      count => {
        if(count){
          this.count = count;
        }
      }
    )
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if(window.scrollY > 5){
      this.scrolled = true;
    }
    if(window.scrollY === 0) {
      this.scrolled = false;

    }
  }

}
