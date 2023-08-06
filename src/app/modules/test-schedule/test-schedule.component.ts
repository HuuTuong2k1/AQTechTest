import { Component, OnInit } from '@angular/core';
import { TestScheduleService } from 'src/app/service/test-schedule.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-test-schedule',
  templateUrl: './test-schedule.component.html',
  styleUrls: ['./test-schedule.component.css']
})
export class TestScheduleComponent implements OnInit {
  hocky: string = ''
  namhoc: string = ''
  hoc_ky: string = ''
  data: [] = []

  constructor(
    private TestScheduleService: TestScheduleService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getDataFromSessionStorage()

    this.route.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        sessionStorage.clear()
      })
  }

  getDataFromSessionStorage() {
    const savedData = sessionStorage.getItem('test-schedule')
    if (savedData) {
      const {hocky, namhoc, hoc_ky, data} = JSON.parse(savedData)
      this.hocky = hocky
      this.namhoc = namhoc
      this.hoc_ky = hoc_ky
      this.data = data
    }
  }

  saveDataToSessionStorage() {
    const data = {
      hocky: this.hocky,
      namhoc: this.namhoc,
      hoc_ky: this.hoc_ky,
      data: this.data
    }
    sessionStorage.setItem('test-schedule', JSON.stringify(data))
  }

  getTestSchedule(hocky: string) {
    this.TestScheduleService.getLichThi(hocky).subscribe({
      next: data => {
        data.data['ds_lich_thi'] ? this.data = data.data['ds_lich_thi'] : this.data = []
        this.saveDataToSessionStorage()
      },
      error: err => {
        console.log(err)
      }
    })
  }

  onclickLietke(){
    this.hoc_ky = `${this.namhoc}${this.hocky}`
    this.getTestSchedule(this.hoc_ky)
  }
}
