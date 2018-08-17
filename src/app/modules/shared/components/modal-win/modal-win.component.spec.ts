import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWinComponent } from './modal-win.component';

describe('ModalWinComponent', () => {
  let component: ModalWinComponent;
  let fixture: ComponentFixture<ModalWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
