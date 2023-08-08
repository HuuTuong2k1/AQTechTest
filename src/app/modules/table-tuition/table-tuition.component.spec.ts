import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTuitionComponent } from './table-tuition.component';

describe('TableTuitionComponent', () => {
  let component: TableTuitionComponent;
  let fixture: ComponentFixture<TableTuitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTuitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
