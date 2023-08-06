import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScheduleDetailComponent } from './test-schedule-detail.component';

describe('TestScheduleDetailComponent', () => {
  let component: TestScheduleDetailComponent;
  let fixture: ComponentFixture<TestScheduleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestScheduleDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestScheduleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
