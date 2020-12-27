import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ShoppingItem } from "./shopping-item.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingListChanged = new Subject<{'shoppingItem': ShoppingItem, 'amount': number}[]>()

  private shoppingList = [
    { 'shoppingItem': new ShoppingItem('T-shirt','female', 3),
      'amount': 1},
    { 'shoppingItem': new ShoppingItem('Shoes', 'male', 4),
      'amount': 2},
    { 'shoppingItem': new ShoppingItem('Pants', 'female', 5),
      'amount': 3}
  ];

  getShoppingList() {
    return this.shoppingList.slice();
  }

  addToShoppingList(item: ShoppingItem, amount: number) {
    this.shoppingList.push({'shoppingItem': item, 'amount': amount});
    this.shoppingListChanged.next(this.shoppingList.slice());
  }
}
