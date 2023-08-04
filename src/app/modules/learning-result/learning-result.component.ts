import { Component, OnInit } from '@angular/core';
import { LearningResultService } from 'src/app/service/learning-result.service';

@Component({
  selector: 'app-learning-result',
  templateUrl: './learning-result.component.html',
  styleUrls: ['./learning-result.component.css']
})
export class LearningResultComponent implements OnInit{

  constructor(
    private learningResultService: LearningResultService
  ) {}

  ngOnInit(): void {
    this.getDiem()
  }

  getDiem() {
    this.learningResultService.getDiem().subscribe({
      next: data => {
        console.log(data)
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
