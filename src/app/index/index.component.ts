import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [HttpService]
})
export class IndexComponent implements OnInit {
  getCountUrl: string = `${this.http.baseUrl}index/index.php`;

  constructor(private http: HttpService) { }

  count: any = null;

  ngOnInit() {
    this.getCount();
  }

  getCount() {
    this.http.sendGetMethod(this.getCountUrl, {})
      .subscribe((data: any) => {
        console.log(data)
        this.count = data;
      })
  }
}
