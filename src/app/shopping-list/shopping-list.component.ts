import { Component, OnInit } from '@angular/core';

import { ShoppingItem } from './shopping-item.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: ShoppingItem[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.getShoppingList();
  }

}
