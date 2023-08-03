import { Component, OnInit } from '@angular/core';
import { EducationProgramService } from 'src/app/service/education-program.service';

interface EducationProgramData {
  hoc_ky: string;
  ten_hoc_ky: string;
  ds_CTDT_mon_hoc: any[]; // You can replace `any` with a more specific type if possible
}

@Component({
  selector: 'app-education-program',
  templateUrl: './education-program.component.html',
  styleUrls: ['./education-program.component.css']
})
export class EducationProgramComponent implements OnInit{
  isCheckClickLietKe = false
  dataCTDT: EducationProgramData[] = []
  dataSelected: EducationProgramData[] = []
  hocky: string = ''
  namhoc: string = ''

  ngOnInit(): void {
    this.EducationProgram()
  }

  constructor(
    private eduService: EducationProgramService
  ){} 

  EducationProgram() {
    this.eduService.educationProgram().subscribe({
      next: data => {
        this.dataCTDT = data.data.ds_CTDT_hocky
        this.dataSelected.push(this.dataCTDT[0]);
        console.log(this.dataCTDT)
        console.log(this.dataSelected)
      },

      error: err => {
        console.log(err)
      }
    })
  }

  onclickLietke() {
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
  }
}

