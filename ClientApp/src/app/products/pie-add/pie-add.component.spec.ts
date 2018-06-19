import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieAddComponent } from './pie-add.component';

describe('PieAddComponent', () => {
  let component: PieAddComponent;
  let fixture: ComponentFixture<PieAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
