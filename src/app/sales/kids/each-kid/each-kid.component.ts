import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

import { KidProfile } from 'src/app/profile/kid-profile.model';

@Component({
  selector: 'app-each-kid',
  templateUrl: './each-kid.component.html',
  styleUrls: ['./each-kid.component.css']
})
export class EachKidComponent implements OnInit {
  @Input() kid: KidProfile;
  @Input() index: number;

  @Output() ageSelected = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectKid() {
    // console.log(this.kid);
    // console.log(this.kid.age);
    this.ageSelected.emit(this.kid.age);
  }

}
