import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public router: Router) {}

  /**
   * Navigates to the 'users' route.
   * This method is intended to be called to navigate to the 'users' route.
   */
  navigateToUserListComponent(): void {
    this.router.navigate(['users']);
  }
}
