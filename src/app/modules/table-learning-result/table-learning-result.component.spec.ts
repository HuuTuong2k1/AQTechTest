import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLearningResultComponent } from './table-learning-result.component';

describe('TableLearningResultComponent', () => {
  let component: TableLearningResultComponent;
  let fixture: ComponentFixture<TableLearningResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLearningResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableLearningResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
