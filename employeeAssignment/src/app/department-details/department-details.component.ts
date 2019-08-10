import { Component, OnInit, Input } from '@angular/core';
import DepartmentData from '../department-data';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  @Input() id: number;
  element: DepartmentData;
  showUpdateField: boolean;

  constructor(private fetchService: FetchService) { }

  ngOnInit() {
    this.updateElement();
  }

  updateElement(): void {
    this.element = this.fetchService.getDepartmentDataByID(this.id);
  }

  toggleUpdate(): void {
    this.showUpdateField = !this.showUpdateField;
  }

  updateElemBackend(element: DepartmentData): void {
    this.fetchService.updateEmployeeByID(element.department_id, element.department_name);
  }

}
