import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAddComponent } from './detail-add.component';

describe('DetailAddComponent', () => {
  let component: DetailAddComponent;
  let fixture: ComponentFixture<DetailAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
