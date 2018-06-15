import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
  providers: [HttpService]
})
export class BookAddComponent implements OnInit {
  categoryListUrl: string = `${this.http.baseUrl}category/category_list.php`;

  categoryList: string[] = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList() {
    this.http.sendGetMethod(this.categoryListUrl, {})
      .subscribe((data: any) => {
        this.categoryList = data;
      })
  }
}
