import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubpageComponent } from './card-subpage.component';

describe('CardSubpageComponent', () => {
  let component: CardSubpageComponent;
  let fixture: ComponentFixture<CardSubpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSubpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
