import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { HttpParams } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [HttpService]
})
export class BookListComponent implements OnInit {
  modalRef: BsModalRef;
  
  bookListUrl = `${this.http.baseUrl}book/book_list.php`;
  delBookUrl = `${this.http.baseUrl}book/del_book.php`;
  gid: any = null;

  bookLists: string[] = null;
  totalItems: number = 0;
  itemsPerPage: number = 10;
  pno: any = 1;

  constructor(
    private http: HttpService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getBookList();
  }

  pageChanged(event: PageChangedEvent): void {
    this.pno = event.page;
    this.getBookList();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  getBookList() {
    let httpOptios = {
      params: new HttpParams().set('pno', this.pno)
    }
    this.http.sendGetMethod(this.bookListUrl, httpOptios)
      .subscribe((data: any) => {
        console.log(data);
        this.bookLists = data['bookLists'];
        this.totalItems = data['totalItems'];
        this.itemsPerPage = data['itemsPerPage'];
      })
  }

  openModal(template: TemplateRef<any>, gid) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  ok(): void {
    this.modalRef.hide();
    this.delBook();
    this.getBookList();
  }
 
  cancel(): void {
    this.modalRef.hide();
  }

  delBook() {
    let httpOptios = {
      params: new HttpParams().set('gid', this.gid)
    }
    this.http.sendGetMethod(this.delBookUrl, httpOptios)
      .subscribe((data: any) => {
        console.log(data);
      })
  }
}
