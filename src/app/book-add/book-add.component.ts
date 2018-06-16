import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
  providers: [HttpService]
})
export class BookAddComponent implements OnInit {
  categoryListUrl: string = `${this.http.baseUrl}category/category_list.php`;
  addBookUrl: string = `${this.http.baseUrl}book/add_book.php`;

  bookInfo: object = {
    fid: '',
    isbn: '',
    gname: '',
    title: '',
    sub_title: '',
    author: '',
    publishing: '',
    publish_time: null,
    price: null,
    discount_price: null,
    introduction: ''
  };

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

  addBook(info) {
    if(info.fid === '' || info.isbn === '' || info.gname === '' || info.title === '' ||
      info.sub_title === '' || info.author === '' || info.publishing === ''
      || info.publish_time === null || info.price === null || info.discount_price === null
      || info.introduction === '') {
        alert('请填写完整所有字段！');
    } else {
      let httpOptions = {
        params: new HttpParams().set('fid', info.fid)
          .set('isbn', info.isbn)
          .set('gname', info.gname)
          .set('title', info.title)
          .set('sub_title', info.sub_title)
          .set('author', info.author)
          .set('publishing', info.publishing)
          .set('publish_time', ''+new Date(info.publish_time).getTime())
          .set('price', parseFloat(info.price).toFixed(2))
          .set('discount_price', parseFloat(info.discount_price).toFixed(2))
          .set('introduction', info.introduction)
      }
      this.http.sendGetMethod(this.addBookUrl, httpOptions)
        .subscribe((data: any) => {
          console.log(data);
          if(data.code === 200) {
            alert(data.msg);
            this.reset();
          }
        })
    }
  }

  reset() {
    this.bookInfo = {
      fid: '',
      isbn: '',
      gname: '',
      title: '',
      sub_title: '',
      author: '',
      publishing: '',
      publish_time: null,
      price: null,
      discount_price: null,
      introduction: ''
    };
  }
}
