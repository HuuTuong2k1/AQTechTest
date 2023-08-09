import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-marks',
  templateUrl: './dialog-marks.component.html',
  styleUrls: ['./dialog-marks.component.css']
})

export class DialogMarksComponent{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogMarksComponent>
  ){}

  closeDialog() {
    this.dialogRef.close()
  }
}
