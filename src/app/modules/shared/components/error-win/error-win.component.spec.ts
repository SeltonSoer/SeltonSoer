import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorWinComponent } from './error-win.component';

describe('ErrorWinComponent', () => {
  let component: ErrorWinComponent;
  let fixture: ComponentFixture<ErrorWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
