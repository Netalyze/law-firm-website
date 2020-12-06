import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkOffersComponent } from './work-offers.component';

describe('WorkOffersComponent', () => {
  let component: WorkOffersComponent;
  let fixture: ComponentFixture<WorkOffersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
