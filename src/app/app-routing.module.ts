import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookAddComponent} from './book-add/book-add.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes : Routes = [
  {
    path: '',
    component: IndexComponent
  }, {
    path: 'bookList',
    component: BookListComponent
  }, {
    path: 'bookAdd',
        component: BookAddComponent
  }, {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}