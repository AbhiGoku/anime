import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeybladeComponent } from './beyblade.component';

describe('BeybladeComponent', () => {
  let component: BeybladeComponent;
  let fixture: ComponentFixture<BeybladeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeybladeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeybladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
