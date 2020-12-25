import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from 'src/app/shopping-list/shopping-item.model';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit {
  recommendations: ShoppingItem[] = [
    new ShoppingItem('hat', 1, 'femail', 3),
    new ShoppingItem('shirt', 1, 'male', 5),
    new ShoppingItem('pants', 1, 'female', 4),
    new ShoppingItem('socks', 1, 'female', 6),
    new ShoppingItem('shoes', 1, 'male', 7)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
