import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { KidProfile } from './kid-profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // profile: KidProfile[];
  profileForm: FormGroup;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    // this.profile = this.profileService.getProfile();
    this.initForm();
  }

  private initForm() {
    let profileKids = new FormArray([]);

    const profile = this.profileService.getProfile();
    for (let profileKid of profile) {
      profileKids.push(new FormGroup({
        'name': new FormControl(profileKid.name,Validators.required),
        'sex': new FormControl(profileKid.sex, Validators.required),
        'age': new FormControl(profileKid.age, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      }))
    }

    this.profileForm = new FormGroup({
      'kids': profileKids
    })
  }

  get controls() {
    return (<FormArray>this.profileForm.get('kids')).controls;
  }

  onAddKid() {
    (<FormArray>this.profileForm.get('kids')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'sex': new FormControl(null, Validators.required),
        'age': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

}
