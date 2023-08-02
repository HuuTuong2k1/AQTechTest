import { Component, OnInit } from '@angular/core';
import { EducationProgramService } from 'src/app/service/education-program.service';

@Component({
  selector: 'app-education-program',
  templateUrl: './education-program.component.html',
  styleUrls: ['./education-program.component.css']
})
export class EducationProgramComponent implements OnInit{
  isCheckLietKe = false
  dataCTDT: any

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
        console.log(this.dataCTDT[0].ds_CTDT_mon_hoc)
      },

      error: err => {
        console.log(err)
      }
    })
  }
}
