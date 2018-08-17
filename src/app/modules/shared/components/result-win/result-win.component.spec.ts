import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultWinComponent } from './result-win.component';

describe('ResultWinComponent', () => {
  let component: ResultWinComponent;
  let fixture: ComponentFixture<ResultWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
