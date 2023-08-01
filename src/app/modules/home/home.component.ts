import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/service/share-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSV: any

  constructor(
    private sharedDataService: ShareDataService
  ){}

  ngOnInit(): void {
    this.dataSV = this.sharedDataService.dataShare
  }
}
