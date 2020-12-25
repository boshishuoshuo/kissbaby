import { Component, OnInit } from '@angular/core';
import { KidProfile } from 'src/app/profile/kid-profile.model';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  profile: KidProfile[];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
  }

}
