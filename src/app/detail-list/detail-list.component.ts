import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { HttpParams } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css'],
  providers: [HttpService]
})
export class DetailListComponent implements OnInit {
  modalRef: BsModalRef;
  
  detailListUrl = `${this.http.baseUrl}detail/detail_list.php`;
  delDetailUrl = `${this.http.baseUrl}detail/del_detail.php`;
  did: any = null;

  detailLists: string[] = null;
  totalItems: number = 0;
  itemsPerPage: number = 10;
  pno: any = 1;

  constructor(
    private http: HttpService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getdetailList();
  }

  pageChanged(event: PageChangedEvent): void {
    this.pno = event.page;
    this.getdetailList();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  getdetailList() {
    let httpOptios = {
      params: new HttpParams().set('pno', this.pno)
    }
    this.http.sendGetMethod(this.detailListUrl, httpOptios)
      .subscribe((data: any) => {
        this.detailLists = data['detailLists'];
        this.totalItems = data['totalItems'];
        this.itemsPerPage = data['itemsPerPage'];
      })
  }

  openModal(template: TemplateRef<any>, did) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.did = did;
  }

  ok(): void {
    this.deldetail();
    this.modalRef.hide();
  }
 
  cancel(): void {
    this.modalRef.hide();
  }

  deldetail() {
    let httpOptios = {
      params: new HttpParams().set('did', this.did)
    }
    this.http.sendGetMethod(this.delDetailUrl, httpOptios)
      .subscribe((data: any) => {
        console.log(data);
        this.getdetailList();
      })
  }
}
