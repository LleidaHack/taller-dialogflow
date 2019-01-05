import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCalendarComponent } from './new-calendar.component';

describe('NewCalendarComponent', () => {
  let component: NewCalendarComponent;
  let fixture: ComponentFixture<NewCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
