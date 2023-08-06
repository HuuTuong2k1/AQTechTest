import { Component, OnInit } from '@angular/core';
import { LearningResultService } from 'src/app/service/learning-result.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators'
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogMarksComponent } from '../dialog-marks/dialog-marks.component';

interface LearningResultData{
  loai_nganh: number,
  hoc_ky: string,
  ten_hoc_ky: string
  dtb_hk_he10: string,
  dtb_hk_he4: string,
  dtb_tich_luy_he_10: string,
  dtb_tich_luy_he_4: string,
  so_tin_chi_dat_hk: string,
  so_tin_chi_dat_tich_luy: string,
  hien_thi_tk_he_10: string,
  hien_thi_tk_he_4: string,
  ds_diem_mon_hoc: [],
}

interface TotalTC{
  hocky: string,
  total: number
}

@Component({
  selector: 'app-learning-result',
  templateUrl: './learning-result.component.html',
  styleUrls: ['./learning-result.component.css']
})

export class LearningResultComponent implements OnInit{
  isLietKe = false
  dataResult:LearningResultData[] = []
  dataSelected:LearningResultData[] = []
  hocky: string = ''
  namhoc: string = ''
  total_TC_Dky: number = 0
  total_TC_Dky_: TotalTC[]=[] 

  constructor(
    private learningResultService: LearningResultService,
    private route: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getDiem()
    this.retrieveDataFromSessionStorage()

    this.route.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        sessionStorage.clear()
      })
  }

  private saveDataTosessionStorage() {
    const dataToSave = {
      hocky: this.hocky,
      namhoc: this.namhoc,
      isLietKe: this.isLietKe,
      dataSelected: this.dataSelected
    };
    sessionStorage.setItem('Learning-result-data', JSON.stringify(dataToSave));
  }

  private retrieveDataFromSessionStorage() {
    const savedData = sessionStorage.getItem('Learning-result-data');
    if (savedData) {
      const { hocky, namhoc, isLietKe,dataSelected } = JSON.parse(savedData);
      this.hocky = hocky;
      this.namhoc = namhoc;
      this.isLietKe = isLietKe;
      this.dataSelected = dataSelected;
    } else {
      // Nếu không có dữ liệu trong sessionStorage thì mặc định là hocky và namhoc như sau:
      this.hocky = '1';
      this.namhoc = '2020';
    }
  }

  getDiem() {
    this.learningResultService.getDiem().subscribe({
      next: data => {
        this.dataResult = data.data['ds_diem_hocky']
        this.totalTC()
      },
      error: err => {
        console.log(err)
      }
    })
  }

  onclickLietke() {
    this.isLietKe = true
    this.dataSelected = []
    this.total_TC_Dky_ = []
    this.dataResult.forEach(element => {
      if (this.hocky != '0' && this.namhoc != '0') {
        (element.hoc_ky === `${this.namhoc}${this.hocky}`) ? this.dataSelected.push(element) : ''
      } else if (this.hocky != '0' && this.namhoc === '0'){
        (element.ten_hoc_ky.includes(`Học kỳ ${this.hocky}`)) ? this.dataSelected.push(element) : ''
      } else if (this.hocky === '0' && this.namhoc != '0') {
        (element.hoc_ky.includes(`${this.namhoc}`)) ? this.dataSelected.push(element) : ''
      } else {
        this.dataSelected.push(element)
      }
    });
    console.log(this.dataSelected.length)
    console.log(this.isLietKe)
    if(this.dataSelected.length === 0) {
      sessionStorage.clear()
    }
    this.saveDataTosessionStorage()
    this.totalTC()
  }

  totalTC() {
    if(this.isLietKe && this.dataSelected.length > 0) {
      let total = 0
      this.dataSelected.forEach((data) => {
        data.ds_diem_mon_hoc.forEach((item) => {
          total += parseFloat(item['so_tin_chi']);
        })
        this.total_TC_Dky_.push({
          hocky: data.hoc_ky,
          total: total
        })
      })
      console.log(this.total_TC_Dky_)
    } else {
      this.total_TC_Dky = this.dataResult[0].ds_diem_mon_hoc.reduce((total, item) => total += parseFloat(item['so_tin_chi']), 0)
    }
  }

  openDialog(value: any) {
    this.dialog.open(DialogMarksComponent, {
      data: value
    });
  }
}
