import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {IUserList} from "./UserList";

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  public userListDetails: Subject<IUserList[] | string> = new Subject<IUserList[] | string>();
  public userListDetails$ = this.userListDetails.asObservable();

  constructor(public httpClient: HttpClient) {}

  /**
   * Fetches all user list data from the API endpoint.
   * If successful, updates the userListDetails$ Observable with the fetched data.
   * If an error occurs, updates the userListDetails$ Observable with an error message.
   */
  getAllUserList() {
    this.httpClient.get<IUserList[]>('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (userList: IUserList[]) => {
        if (userList !== undefined && userList !== null) {
          this.userListDetails.next(userList);
        }
      }, error: error => {
        this.userListDetails.next('error');
      }
    });
  }
}
