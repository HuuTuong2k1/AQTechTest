import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-marks',
  templateUrl: './dialog-marks.component.html',
  styleUrls: ['./dialog-marks.component.css']
})
export class DialogMarksComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogMarksComponent>
  ){}

  ngOnInit(): void {
    console.log(this.data)
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
