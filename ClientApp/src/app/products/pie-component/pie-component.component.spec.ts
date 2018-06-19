import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieComponentComponent } from './pie-component.component';

describe('PieComponentComponent', () => {
  let component: PieComponentComponent;
  let fixture: ComponentFixture<PieComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
