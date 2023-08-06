import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-test-schedule-detail',
  templateUrl: './test-schedule-detail.component.html',
  styleUrls: ['./test-schedule-detail.component.css']
})
export class TestScheduleDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<TestScheduleDetailComponent>
  ){}

  ngOnInit(): void {
    console.log(this.data)
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
