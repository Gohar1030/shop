import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  basketCount;
  constructor(public basket:BasketService) { }


  ngOnInit() {
    this.basket.count.subscribe(
      count => {
        this.basketCount = count;
      }
    )
  }

  add(id){
    this.basketCount++;
    this.basket.count.next(this.basketCount);
  }

}
