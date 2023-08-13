import { Component, Input, OnInit } from '@angular/core';
import { LearningResultData } from 'src/app/interfaces/learning-result-data';
import { TotalTC } from 'src/app/interfaces/total-tc';
import { MatDialog } from '@angular/material/dialog';
import { DialogMarksComponent } from '../dialog-marks/dialog-marks.component';

@Component({
  selector: 'app-table-learning-result',
  templateUrl: './table-learning-result.component.html',
  styleUrls: ['./table-learning-result.component.css']
})
export class TableLearningResultComponent implements OnInit{
  @Input() data: LearningResultData [] = []
  @Input() namhoc: string = ''
  @Input() hocky: string = ''
  total_TC_Dky_: TotalTC [] = []

  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.totalTC()
  }

  totalTC() {
    this.total_TC_Dky_ = []
    if(this.data.length > 0) {
      this.data.forEach((data) => {
        let total = 0
        data.ds_diem_mon_hoc.forEach((item) => {
          total += parseFloat(item['so_tin_chi']);
        })
        this.total_TC_Dky_.push({
          hocky: data.hoc_ky,
          total: total
        })
      })
    }
  }

  openDialog(value: any) {
    this.dialog.open(DialogMarksComponent, {
      data: value
    });
  }
}
