import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingItem } from 'src/app/shopping-list/shopping-item.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit {
  recommendations: ShoppingItem[] = [
    new ShoppingItem('hat', 'femail', 3),
    new ShoppingItem('shirt', 'male', 5),
    new ShoppingItem('pants', 'female', 4),
    new ShoppingItem('socks', 'female', 6),
    new ShoppingItem('shoes', 'male', 7)
  ]
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onBuy(item: ShoppingItem, form: NgForm) {
    // console.log(item);
    // console.log(form.value.amount);
    this.shoppingListService.addToShoppingList(item, form.value.amount);
  }

}
