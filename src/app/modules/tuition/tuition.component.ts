import { Component, OnInit } from '@angular/core';
import { TuitionService } from 'src/app/service/tuition.service';

@Component({
  selector: 'app-tuition',
  templateUrl: './tuition.component.html',
  styleUrls: ['./tuition.component.css']
})
export class TuitionComponent implements OnInit{
  
  constructor(
    private tuitionservice: TuitionService,
  ) {}
  
  ngOnInit(): void {
    this.getHocPhi()
  }

  getHocPhi() {
    this.tuitionservice.getHocPhi().subscribe({
      next: data => {
        console.log(data)
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
