import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './/app-routing.module';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookAddComponent} from './book-add/book-add.component';
import {TimestampPipe} from './timestamp.pipe';
import {CategoryListComponent} from './category-list/category-list.component';
import {CarouselListComponent} from './carousel-list/carousel-list.component';
import {DetailListComponent} from './detail-list/detail-list.component';
import {DetailAddComponent} from './detail-add/detail-add.component';
import {UserComponent} from './user/user.component';
import {EditCategoryModalComponent} from './category-list/category-list.component';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NotFoundComponent,
    BookListComponent,
    BookAddComponent,
    TimestampPipe,
    CategoryListComponent,
    CarouselListComponent,
    DetailListComponent,
    DetailAddComponent,
    UserComponent,
    EditCategoryModalComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    FontAwesomeModule
  ],
  entryComponents: [
    EditCategoryModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}