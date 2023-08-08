import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Tuition } from 'src/app/interfaces/tuition';

@Component({
  selector: 'app-table-tuition',
  templateUrl: './table-tuition.component.html',
  styleUrls: ['./table-tuition.component.css']
})


export class TableTuitionComponent implements OnInit, OnChanges{
  @Input() data: Tuition[] = [];
  @Input() hocky: string = ''
  @Input() namhoc: string = ''
  totalHocPhi: number = 0
  totalMienGiam: number = 0
  totalPhaiThu: number = 0
  totalDaThu: number = 0
  totalConNo: number = 0

  ngOnInit(): void {
    this.total()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.total()
    }
  }

  total() {
      this.totalHocPhi = this.data.reduce((total, item) => total + parseFloat(item.hoc_phi), 0)
      this.totalMienGiam = this.data.reduce((total, item) => total + parseFloat(item.mien_giam), 0)
      this.totalPhaiThu = this.totalHocPhi - this.totalMienGiam
      this.totalDaThu = this.data.reduce((total, item) => total + parseFloat(item.da_thu), 0)
      this.totalConNo = this.totalPhaiThu - this.totalDaThu
  }

  customMoney(money: number): string {
    return money.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
  }
}
