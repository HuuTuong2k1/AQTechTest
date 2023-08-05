import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMarksComponent } from './dialog-marks.component';

describe('DialogMarksComponent', () => {
  let component: DialogMarksComponent;
  let fixture: ComponentFixture<DialogMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
