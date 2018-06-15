import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [HttpService]
})
export class IndexComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

}
