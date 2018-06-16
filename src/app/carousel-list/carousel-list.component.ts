import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpParams } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.css'],
  providers: [HttpService]
})
export class CarouselListComponent implements OnInit {
  modalRef: BsModalRef;
  
  carouselListUrl: string = `${this.http.baseUrl}index/carousel/carousel_list.php`;
  addCarouselUrl: string = `${this.http.baseUrl}index/carousel/add_carousel.php`;
  delCarouselUrl: string = `${this.http.baseUrl}index/carousel/del_carousel.php`;

  carouselList: string[] = [];

  img: string = '';
  title: string = '';
  href: string = '';
  cid: any = '';

  constructor(
    private http: HttpService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getCarouselList();
  }

  getCarouselList() {
    this.http.sendGetMethod(this.carouselListUrl, {})
      .subscribe((data: any) => {
        this.carouselList = data;
      })
  }

  addCarousel() {
    if(this.img === '' || this.title === '' || this.href === '') {
        alert('请填写完整所有字段！');
    } else {
      let httpOptions = {
        params: new HttpParams().set('img', this.img)
          .set('title', this.title)
          .set('href', this.href)
      }
      this.http.sendGetMethod(this.addCarouselUrl, httpOptions)
        .subscribe((data: any) => {
          if(data.code === 200) {
            alert(data.msg);
            this.img = '';
            this.title = '';
            this.href = '';
            this.getCarouselList();
          }
        })
    }
  }

  openModal(template: TemplateRef<any>, cid) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.cid = cid;
  }

  ok(): void {
    this.delCarousel();
    this.modalRef.hide();
  }
 
  cancel(): void {
    this.modalRef.hide();
  }

  delCarousel() {
    let httpOptios = {
      params: new HttpParams().set('cid', this.cid)
    }
    this.http.sendGetMethod(this.delCarouselUrl, httpOptios)
      .subscribe((data: any) => {
        this.getCarouselList();
      })
  }
}
