import { Component, Input, OnInit } from '@angular/core';

import { KidProfile } from 'src/app/profile/kid-profile.model';

@Component({
  selector: 'app-each-kid',
  templateUrl: './each-kid.component.html',
  styleUrls: ['./each-kid.component.css']
})
export class EachKidComponent implements OnInit {
  @Input() kid: KidProfile;

  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
