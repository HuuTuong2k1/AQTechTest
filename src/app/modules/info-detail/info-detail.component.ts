import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/service/share-data.service';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})
export class InfoDetailComponent implements OnInit{
  dataSV: any

  constructor(
    private shareService: ShareDataService
  ){}

  ngOnInit(): void {
    this.getDataFromShareService()
  }

  getDataFromShareService() {
    this.dataSV = this.shareService.getData()
  }
}
