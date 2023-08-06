import { Component, OnInit } from '@angular/core';
import { TestScheduleService } from 'src/app/service/test-schedule.service';

@Component({
  selector: 'app-test-schedule',
  templateUrl: './test-schedule.component.html',
  styleUrls: ['./test-schedule.component.css']
})
export class TestScheduleComponent implements OnInit {

  constructor(
    private TestScheduleService: TestScheduleService
  ) {}

  ngOnInit(): void {
    // this.getTestSchedule()
  }

  getTestSchedule(hocky: string) {
    this.TestScheduleService.getLichThi(hocky).subscribe({
      next: data => {
        console.log(data)
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
