import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  age: number;

  constructor() { }

  ngOnInit(): void {
  }

  onPassAge(age: number) {
    this.age = age;
  }

}
