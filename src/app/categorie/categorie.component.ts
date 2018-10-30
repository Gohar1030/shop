import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  items =[
    {id:1,title:'strawberry cake', description:'This cake will make you happy', price:'20', image:'https://images.pexels.com/photos/48184/bun-sweets-pastries-pastry-shop-48184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {id:2,title:'strawberry cake', description:'This cake will make you happy', price:'20', image:'https://images.pexels.com/photos/48184/bun-sweets-pastries-pastry-shop-48184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
