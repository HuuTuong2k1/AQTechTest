import { Component, OnInit } from '@angular/core';
import { LearningResultService } from 'src/app/service/learning-result.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators'
import { LearningResultData } from 'src/app/interfaces/learning-result-data';
import { TotalTC } from 'src/app/interfaces/total-tc';

@Component({
  selector: 'app-learning-result',
  templateUrl: './learning-result.component.html',
  styleUrls: ['./learning-result.component.css']
})

export class LearningResultComponent implements OnInit {
  isLietKe = false
  dataResult: LearningResultData [] = []
  dataSelected: LearningResultData [] = []
  hocky: string = ''
  namhoc: string = ''

  constructor(
    private learningResultService: LearningResultService,
    private route: Router,
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
      this.hocky = '0';
      this.namhoc = '0';
    }
  }

  getDiem() {
    this.learningResultService.getDiem().subscribe({
      next: data => {
        this.dataResult = data.data['ds_diem_hocky']
      },
      error: err => {
        console.log(err)
      }
    })
  }

  onclickLietke() {
    this.isLietKe = true
    this.dataSelected = []
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
    if(this.dataSelected.length === 0) {
      sessionStorage.clear()
    }
    this.saveDataTosessionStorage()
  }
}
