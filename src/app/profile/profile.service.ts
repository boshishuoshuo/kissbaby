import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { KidProfile } from "./kid-profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileChanged = new Subject<KidProfile[]>();

  private profile: KidProfile[] = [
    new KidProfile('Zoe', 'female', 5),
    new KidProfile('Mia', 'female', 3)
  ]

  getProfile() {
    return this.profile.slice();
  }

  updateProfile(profile: KidProfile[]) {
    this.profile = profile;
    console.log(this.profile);
    this.profileChanged.next(this.profile.slice());
  }
}
