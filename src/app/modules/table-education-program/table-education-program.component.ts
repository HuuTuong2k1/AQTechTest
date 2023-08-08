import { Component, Input } from '@angular/core';
import { EducationProgramData } from 'src/app/interfaces/education-program-data';

@Component({
  selector: 'app-table-education-program',
  templateUrl: './table-education-program.component.html',
  styleUrls: ['./table-education-program.component.css']
})
export class TableEducationProgramComponent {
  @Input() data: EducationProgramData [] = []
  @Input() hocky: string = ''
  @Input() namhoc: string = ''

  
}
