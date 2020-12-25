import { Injectable } from "@angular/core";
import { ShoppingItem } from "./shopping-item.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private shoppingList: ShoppingItem[] = [
    new ShoppingItem('T-shirt', 2, 'female', 3),
    new ShoppingItem('Shoes', 1, 'male', 4),
    new ShoppingItem('Pants', 1, 'female', 5)
  ];

  getShoppingList() {
    return this.shoppingList.slice();
  }
}
