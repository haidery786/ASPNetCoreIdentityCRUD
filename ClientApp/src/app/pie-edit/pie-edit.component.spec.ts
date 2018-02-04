import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieEditComponent } from './pie-edit.component';

describe('PieEditComponent', () => {
  let component: PieEditComponent;
  let fixture: ComponentFixture<PieEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
