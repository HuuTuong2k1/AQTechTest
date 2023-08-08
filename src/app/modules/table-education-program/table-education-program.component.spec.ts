import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEducationProgramComponent } from './table-education-program.component';

describe('TableEducationProgramComponent', () => {
  let component: TableEducationProgramComponent;
  let fixture: ComponentFixture<TableEducationProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEducationProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEducationProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
