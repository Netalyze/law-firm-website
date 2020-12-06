import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopMenubarComponent } from './top-menubar.component';

describe('TopMenubarComponent', () => {
  let component: TopMenubarComponent;
  let fixture: ComponentFixture<TopMenubarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
