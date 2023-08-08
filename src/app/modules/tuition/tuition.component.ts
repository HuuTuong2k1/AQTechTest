import { Component, OnInit } from '@angular/core';
import { TuitionService } from 'src/app/service/tuition.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Tuition } from 'src/app/interfaces/tuition';

@Component({
  selector: 'app-tuition',
  templateUrl: './tuition.component.html',
  styleUrls: ['./tuition.component.css']
})
export class TuitionComponent implements OnInit{

  dataTuition: Tuition[] = []
  dataSelected: Tuition[] = []
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
      this.hocky = '0'
      this.namhoc = '0'
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
      if (this.hocky != '0' && this.namhoc != '0' && element.ten_hoc_ky === `Học kỳ ${this.hocky} năm học ${this.namhoc}`) {
        this.dataSelected.push(element) 
      } else if (this.hocky != '0' && this.namhoc === '0' && element.ten_hoc_ky.includes(`Học kỳ ${this.hocky}`)){
        this.dataSelected.push(element) 
      } else if (this.hocky === '0' && this.namhoc != '0' && element.ten_hoc_ky.includes(`năm học ${this.namhoc}`)){
        console.log(element.ten_hoc_ky.includes(`năm học ${this.namhoc}`))
        this.dataSelected.push(element) 
      } else if (this.hocky === '0' && this.namhoc === '0') {
        this.dataSelected.push(element)
      } else {
        
      }
    });
    this.saveDataToSessionStorage()
  }
}
