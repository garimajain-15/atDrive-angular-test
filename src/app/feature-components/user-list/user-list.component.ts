import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserListService} from "./user-list.service";
import {Subscription} from "rxjs";
import {IUserList} from "./UserList";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  public userListDetails$?: Subscription;
  public allUserList: IUserList[] = [];
  public isUserListLoaded: boolean = false;
  public isUserListApiFailed: boolean = false;

  constructor(public userListService: UserListService) {}

  ngOnInit() {
    this.userListDetails$ = this.userListService.userListDetails$.subscribe((userListData: IUserList[] | string)  => {
      if (userListData !== undefined && userListData !== null) {
        // Check if userListData is a string indicating an error message
        if (typeof userListData === 'string' && userListData === "error") {
          this.isUserListApiFailed = true;
        } else if (typeof userListData !== 'string') {
          // Set user list data and flag indicating successful data loading
          this.allUserList = userListData;
          this.isUserListLoaded = true;
        }
      }
    });
    this.userListService.getAllUserList();
  }

  ngOnDestroy() {
    if (this.userListDetails$) {
      this.userListDetails$.unsubscribe();
    }
    this.resetAllDataOnDestroy();
  }

  resetAllDataOnDestroy() {
    this.isUserListApiFailed = false;
    this.isUserListLoaded = false;
    this.allUserList = [];
  }
}
