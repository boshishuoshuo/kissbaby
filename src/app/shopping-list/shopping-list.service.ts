import { Injectable } from "@angular/core";
import { ShoppingItem } from "./shopping-item.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private shoppingList: ShoppingItem[] = [
    new ShoppingItem('T-shirt', 2),
    new ShoppingItem('Shoes', 1),
    new ShoppingItem('Pants', 1)
  ];

  getShoppingList() {
    return this.shoppingList.slice();
  }
}
