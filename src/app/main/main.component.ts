import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items =[
    {id:1,title:'strawberry cake', description:'This cake will make you happy', price:'20', image:'https://images.pexels.com/photos/48184/bun-sweets-pastries-pastry-shop-48184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {id:2,title:'strawberry cake', description:'This cake will make you happy', price:'20', image:'https://images.pexels.com/photos/48184/bun-sweets-pastries-pastry-shop-48184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {id:3,title:'strawberry cake', description:'This cake will make you happy', price:'20', image:'https://images.pexels.com/photos/48184/bun-sweets-pastries-pastry-shop-48184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {id:4,title:'strawberry cake', description:'This cake will make you happy', price:'20', image:'https://images.pexels.com/photos/48184/bun-sweets-pastries-pastry-shop-48184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}


  ];
  text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam voluptates. Voluptate fugit magnam deleniti provident incidunt modi quos sapiente iusto adipisci mollitia ratione perspiciatis illum, dicta ipsa asperiores deserunt.';
  constructor() { }

  ngOnInit() {
  }

}
