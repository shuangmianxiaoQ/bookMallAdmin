import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpParams } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [HttpService]
})
export class CategoryListComponent implements OnInit {
  modalRef: BsModalRef;

  categoryListUrl: string = `${this.http.baseUrl}category/category_list.php`;
  addCategoryUrl: string = `${this.http.baseUrl}category/add_category.php`;
  deCategoryUrl: string = `${this.http.baseUrl}category/del_category.php`;

  categoryList: string[] = [];
  fname: string = '';
  fid: any = null;

  constructor(
    private http: HttpService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList() {
    this.http.sendGetMethod(this.categoryListUrl, {})
      .subscribe((data: any) => {
        this.categoryList = data;
      })
  }

  addCategory() {
    if(this.fname === '') {
        alert('请填写类目名称！');
    } else {
      let httpOptions = {
        params: new HttpParams().set('fname', this.fname)
      }
      this.http.sendGetMethod(this.addCategoryUrl, httpOptions)
        .subscribe((data: any) => {
          if(data.code === 200) {
            alert(data.msg);
            this.fname = '';
            this.getCategoryList();
          }
        })
    }
  }
  
  openModal(template: TemplateRef<any>, fid) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.fid = fid;
  }

  ok(): void {
    this.delBook();
    this.modalRef.hide();
  }
 
  cancel(): void {
    this.modalRef.hide();
  }

  delBook() {
    let httpOptios = {
      params: new HttpParams().set('fid', this.fid)
    }
    this.http.sendGetMethod(this.deCategoryUrl, httpOptios)
      .subscribe((data: any) => {
        this.getCategoryList();
      })
  }

  editCategory(fid, fname) {
    const initialState = {
      fid: fid,
      fname: fname
    };
    this.modalRef = this.modalService.show(
      EditCategoryModalComponent,
      Object.assign({initialState}, { class: 'edit' })
    );
  }
}

@Component({
  selector: 'edit-category-modal',
  templateUrl: './edit-category/edit-category.component.html',
  providers: [HttpService]
})

export class EditCategoryModalComponent implements OnInit {
  editCategoryUrl: string = `${this.http.baseUrl}category/edit_category.php`;

  fid: any;
  fname: string;
 
  constructor(
    private http: HttpService,
    public bsModalRef: BsModalRef
  ) {}
 
  ngOnInit() { }

  saveEdit() {
    let httpOptions = {
      params: new HttpParams().set('fid', this.fid).set('fname', this.fname)
    }
    this.http.sendGetMethod(this.editCategoryUrl, httpOptions)
      .subscribe((data: any) => {
        this.bsModalRef.hide();
        alert(data.msg);
        location.reload();
      })
  }
}