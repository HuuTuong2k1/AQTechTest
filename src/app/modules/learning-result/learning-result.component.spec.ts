import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningResultComponent } from './learning-result.component';

describe('LearningResultComponent', () => {
  let component: LearningResultComponent;
  let fixture: ComponentFixture<LearningResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
