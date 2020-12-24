import { Injectable } from "@angular/core";

import { KidProfile } from "./kid-profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile: KidProfile[] = [
    new KidProfile('Zoe', 'female', 5),
    new KidProfile('Mia', 'female', 3)
  ]

  getProfile() {
    return this.profile.slice();
  }
}
