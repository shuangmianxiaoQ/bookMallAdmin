import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [HttpService]
})
export class UserComponent implements OnInit {
  userListUrl = `${this.http.baseUrl}user/user_list.php`;

  userLists: string[] = null;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.http.sendGetMethod(this.userListUrl, {})
      .subscribe((data: any) => {
        this.userLists = data;
      })
  }
}
