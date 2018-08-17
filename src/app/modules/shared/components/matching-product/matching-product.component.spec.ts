import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingProductComponent } from './matching-product.component';

describe('MatchingProductComponent', () => {
  let component: MatchingProductComponent;
  let fixture: ComponentFixture<MatchingProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
