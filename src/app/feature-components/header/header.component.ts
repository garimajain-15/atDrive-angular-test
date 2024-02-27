import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(public router: Router) {
  }

  /**
   * Angular lifecycle hook called after Angular has initialized all data-bound properties of the component.
   * It navigates to the 'users' route when the component is initialized.
   */
  ngOnInit(): void {
    this.router.navigate(['users']);
  }

  /**
   * Navigates to the 'users' route.
   * This method is intended to be called to navigate to the 'users' route.
   */
  navigateToUserListComponent(): void {
    this.router.navigate(['users']);
  }
}
