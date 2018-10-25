import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item:Product;
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
