import { Component, Input } from '@angular/core';
import { FetchService } from '../fetch.service';
import EmployeeData from '../employee-data';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  @Input() id: number;
  element: EmployeeData;
  showUpdateField: boolean;

  constructor(private fetchService: FetchService) { }

  ngOnInit() {
    this.updateElement();
  }

  updateElement(): void {
    this.element = this.fetchService.getEmployeeDataByID(this.id);
  }

  toggleUpdate(): void {
    this.showUpdateField = !this.showUpdateField;
  }

  updateElemBackend(element: EmployeeData): void {
    this.fetchService.updateEmployeeByID(element.id, element.name);
  }

}
