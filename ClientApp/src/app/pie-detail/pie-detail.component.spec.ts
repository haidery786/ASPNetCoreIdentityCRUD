import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDetailComponent } from './pie-detail.component';

describe('PieDetailComponent', () => {
  let component: PieDetailComponent;
  let fixture: ComponentFixture<PieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
