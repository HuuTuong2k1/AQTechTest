import { Component, OnInit } from '@angular/core'
import { Router, NavigationStart } from '@angular/router'
import { filter } from 'rxjs/operators'
import { EducationProgramService } from 'src/app/service/education-program.service'
import { EducationProgramData } from 'src/app/interfaces/education-program-data'

@Component({
  selector: 'app-education-program',
  templateUrl: './education-program.component.html',
  styleUrls: ['./education-program.component.css']
})
export class EducationProgramComponent implements OnInit{
  isLietKe = false
  dataCTDT: EducationProgramData [] = []
  dataSelected: EducationProgramData [] = []
  hocky: string = ''
  namhoc: string = ''

  ngOnInit(): void {
    this.EducationProgram()
    this.retrieveDataFromSessionStorage()

    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        sessionStorage.clear(); // Xóa dữ liệu trong sessionStorage mỗi khi chuyển trang
    });
  }

  constructor(
    private eduService: EducationProgramService,
    private router: Router,
  ){} 

  private saveDataTosessionStorage() {
    const dataToSave = {
      hocky: this.hocky,
      namhoc: this.namhoc,
      isLietKe: this.isLietKe,
      dataSelected: this.dataSelected
    };
    sessionStorage.setItem('education_program_data', JSON.stringify(dataToSave));
  }

  private retrieveDataFromSessionStorage() {
    const savedData = sessionStorage.getItem('education_program_data');
    if (savedData) {
      const { hocky, namhoc, isLietKe,dataSelected } = JSON.parse(savedData);
      this.hocky = hocky;
      this.namhoc = namhoc;
      this.isLietKe = isLietKe;
      this.dataSelected = dataSelected;
    } else {
      this.hocky = '0';
      this.namhoc = '0';
    }
  }

  EducationProgram() {
    this.eduService.educationProgram().subscribe({
      next: data => {
        this.dataCTDT = data.data.ds_CTDT_hocky
        this.saveDataTosessionStorage()
      },

      error: err => {
        console.log(err)
      }
    })
  }

  onclickLietke() {
    this.isLietKe = true
    this.dataSelected = [];
    this.dataCTDT.forEach(element => {
      if (this.hocky != '0' && this.namhoc != '0') {
        (element.ten_hoc_ky === `Học kỳ ${this.hocky} Năm học ${this.namhoc}`) ? this.dataSelected.push(element) : ''
      } else if (this.hocky != '0' && this.namhoc === '0'){
        (element.ten_hoc_ky.includes(`Học kỳ ${this.hocky}`)) ? this.dataSelected.push(element) : ''
        console.log(element.ten_hoc_ky.includes(`Học kỳ ${this.hocky}`))
      } else if (this.hocky === '0' && this.namhoc != '0') {
        (element.ten_hoc_ky.includes(`Năm học ${this.namhoc}`)) ? this.dataSelected.push(element) : ''
      } else {
        this.dataSelected.push(element)
      }
    });
    this.saveDataTosessionStorage()
  }
}

