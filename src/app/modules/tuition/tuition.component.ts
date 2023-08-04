import { Component, OnInit } from '@angular/core';
import { TuitionService } from 'src/app/service/tuition.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

interface tuitionData{
  ten_nhom_ct: string,
  ten_hoc_ky: string,
  hoc_phi: string,
  mien_giam: string,
  phai_thu: string,
  tong_hoc_bong: string,
  da_thu: string,
  con_no: string,
  ghi_chu: string
}

@Component({
  selector: 'app-tuition',
  templateUrl: './tuition.component.html',
  styleUrls: ['./tuition.component.css']
})
export class TuitionComponent implements OnInit{

  dataTuition: tuitionData[]=[]
  dataSelected: tuitionData[]=[]
  hocky: string = ''
  namhoc: string = ''
  isLietKe = false
  totalHocPhi: number = 0
  totalMienGiam: number = 0
  totalPhaiThu: number = 0
  totalDaThu: number = 0
  totalConNo: number = 0
  
  constructor(
    private tuitionservice: TuitionService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.getHocPhi()
    this.retrieveDataFromSessionStorage()
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        sessionStorage.clear();
      })
  }

  private retrieveDataFromSessionStorage() {
    const savedData = sessionStorage.getItem('tuition_data')
    if(savedData) {
      const {hocky, namhoc, isLietKe, dataSelected} = JSON.parse(savedData)
      this.hocky = hocky
      this.namhoc = namhoc
      this.isLietKe = isLietKe
      this.dataSelected = dataSelected
    } else {
      this.hocky = '1'
      this.namhoc = '2020 - 2021'
    }
  }

  private saveDataToSessionStorage() {
    const dataToSave = {
      hocky: this.hocky,
      namhoc: this.namhoc,
      isLietKe: this.isLietKe,
      dataSelected: this.dataSelected
    }

    sessionStorage.setItem('tuition_data', JSON.stringify(dataToSave))
  }

  getHocPhi() {
    this.tuitionservice.getHocPhi().subscribe({
      next: data => {
        this.dataTuition = data.data.ds_hoc_phi_hoc_ky
        this.total()
      },
      error: err => {
        console.log(err)
      }
    })
  }

  onclickLietke() {
    this.isLietKe = true
    this.dataSelected = [];
    this.dataTuition.forEach(element => {
      if (this.hocky != '0' && this.namhoc != '0') {
        (element.ten_hoc_ky === `Học kỳ ${this.hocky} năm học ${this.namhoc}`) ? this.dataSelected.push(element) : ''
      } else if (this.hocky != '0' && this.namhoc === '0'){
        (element.ten_hoc_ky.includes(`Học kỳ ${this.hocky}`)) ? this.dataSelected.push(element) : ''
        console.log(element.ten_hoc_ky.includes(`Học kỳ ${this.hocky}`))
      } else if (this.hocky === '0' && this.namhoc != '0') {
        (element.ten_hoc_ky.includes(`năm học ${this.namhoc}`)) ? this.dataSelected.push(element) : ''
      } else {
        this.dataSelected.push(element)
      }
    });
    this.saveDataToSessionStorage()
    this.total()
  }

  isCheckData20201() {
    return this.dataTuition.some(item => item.ten_hoc_ky === 'Học kỳ 1 năm học 2020 - 2021')
  }

  total() {
    if(this.isLietKe) {
      this.totalHocPhi = this.dataSelected.reduce((total, item) => total + parseFloat(item.hoc_phi), 0)
      this.totalMienGiam = this.dataSelected.reduce((total, item) => total + parseFloat(item.mien_giam), 0)
      this.totalPhaiThu = this.totalHocPhi - this.totalMienGiam
      this.totalDaThu = this.dataSelected.reduce((total, item) => total + parseFloat(item.da_thu), 0)
      this.totalConNo = this.totalPhaiThu - this.totalDaThu
    } else {
      this.totalHocPhi = this.dataTuition.filter(item => item.ten_hoc_ky === 'Học kỳ 1 năm học 2020 - 2021').reduce((total, item) => total + parseFloat(item.hoc_phi), 0)
      this.totalMienGiam = this.dataTuition.filter(item => item.ten_hoc_ky === 'Học kỳ 1 năm học 2020 - 2021').reduce((total, item) => total + parseFloat(item.mien_giam), 0)
      this.totalPhaiThu = this.totalHocPhi - this.totalMienGiam
      this.totalDaThu = this.dataTuition.filter(item => item.ten_hoc_ky === 'Học kỳ 1 năm học 2020 - 2021').reduce((total, item) => total + parseFloat(item.da_thu), 0)
      this.totalConNo = this.totalPhaiThu - this.totalDaThu
      console.log(this.totalHocPhi)
    }
  }
}
