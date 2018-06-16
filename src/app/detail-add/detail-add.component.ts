import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-detail-add',
  templateUrl: './detail-add.component.html',
  styleUrls: ['./detail-add.component.css'],
  providers: [HttpService]
})
export class DetailAddComponent implements OnInit {
  addDetailUrl: string = `${this.http.baseUrl}detail/add_detail.php`;

  detailInfo: object = {
    gid: null,
    edition: null,
    page_count: null,
    word_count: null,
    format: '',
    printing_time: null,
    paper: '',
    package: '',
    goods_features: '',
    editor_recommend: '',
    brief_introduction: '',
    author_introduction: '',
    wonderful_digest: ''
  };

  constructor(private http: HttpService) { }

  ngOnInit() { }

  addDetail(info) {
    console.log(info);
    if(info.gid === null || info.edition === null || info.page_count === null || info.word_count === null ||
      info.format === '' || info.printing_time === null || info.paper === '' || info.package === '' ||
      info.goods_features === '' || info.editor_recommend === '' || info.brief_introduction === '' ||
      info.author_introduction === '' || info.wonderful_digest === '') {
        alert('请填写完整所有字段！');
    } else {
      let httpOptions = {
        params: new HttpParams().set('gid', info.gid)
          .set('edition', info.edition)
          .set('page_count', info.page_count)
          .set('word_count', info.word_count)
          .set('format', info.format)
          .set('printing_time', ''+new Date(info.printing_time).getTime())
          .set('paper', info.paper)
          .set('package', info.package)
          .set('goods_features', info.goods_features)
          .set('editor_recommend', info.editor_recommend)
          .set('brief_introduction', info.brief_introduction)
          .set('author_introduction', info.author_introduction)
          .set('wonderful_digest', info.wonderful_digest)
      }
      this.http.sendGetMethod(this.addDetailUrl, httpOptions)
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
    this.detailInfo = {
      gid: null,
      edition: null,
      page_count: null,
      word_count: null,
      format: '',
      printing_time: null,
      paper: '',
      package: '',
      goods_features: '',
      editor_recommend: '',
      brief_introduction: '',
      author_introduction: '',
      wonderful_digest: ''
    };
  }
}
