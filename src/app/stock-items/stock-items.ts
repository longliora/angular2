import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-items',
  imports: [],
  templateUrl: './stock-items.html',
  styleUrl: './stock-items.css',
})
export class StockItems implements OnInit{
  public name!: string; // ":" là khai báo kiểu dữ liệu cho biến
  public code!: string;
  public price!: number;
  public previousPrice!: number;
  public positiveChange!: boolean;
  public favorite!: boolean;

  constructor(){

  }
  ngOnInit(){
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;

    //nếu giá hiện tại price >= giá trước đó previus price
    //thì positiveChange = true
    //ngược lại positiveChange = false
  }
  addToFavorite(){
    console.log('Add to favorite');
    this.favorite = !this.favorite;
  }
}
