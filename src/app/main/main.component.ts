import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items =[
    {title:'strawberry cake', description:'This cake will make you happy', price:'20', image:'https://images.pexels.com/photos/48184/bun-sweets-pastries-pastry-shop-48184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {title:'strawberry cake', description:'This cake will make you happy', price:'20', image:'https://images.pexels.com/photos/48184/bun-sweets-pastries-pastry-shop-48184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {title:'strawberry cake', description:'This cake will make you happy', price:'20', image:'https://images.pexels.com/photos/48184/bun-sweets-pastries-pastry-shop-48184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {title:'strawberry cake', description:'This cake will make you happy', price:'20', image:'https://images.pexels.com/photos/48184/bun-sweets-pastries-pastry-shop-48184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}


  ];
  constructor() { }

  ngOnInit() {
  }

}
