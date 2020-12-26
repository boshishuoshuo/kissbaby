import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KidProfile } from 'src/app/profile/kid-profile.model';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  profile: KidProfile[];
  subscription: Subscription;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.subscription = this.profileService.profileChanged.subscribe(
      (profile: KidProfile[]) => {
        this.profile = profile;
      }
    )
    this.profile = this.profileService.getProfile();
  }

}
