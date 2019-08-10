import { Injectable } from '@angular/core';
import * as employee_Data from "../assets/employeeData.json";
import * as department_Data from "../assets/departmentData.json";
import * as _ from 'lodash';
import EmployeeData from './employee-data';
import DepartmentData from './department-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  private employeeData: EmployeeData[] = employee_Data.data;
  private departmentData: DepartmentData[] = department_Data.data;
 
  public getEmployeeData(): EmployeeData[] {
    return this.employeeData;
    // return this.http.get('http://localhost:4200/assets/employeeData.json');
    // .subscribe(data => { console.log(data); });
  }

  public puEmployeetData(dataElement: EmployeeData): void {
    this.employeeData.push(dataElement);
  }

  public deleteEmployeeByID(id: number): void {
    _.remove(this.employeeData, elem => { return elem.id == id; });
  }

  public getEmployeeDataByID(id: number): EmployeeData {
    return _.find(this.employeeData, elem => { return elem.id == id; });
  }

  public updateEmployeeByID(id: number, name: string): void {
    let index = _.findIndex(this.employeeData, elem => { return elem.id === id; });
    this.employeeData[index].name = name;
  }

  public getDepartmentData(): DepartmentData[] {
    return this.departmentData;
  }

  public deleteDepartmnetByID(id: number): void {
    _.remove(this.departmentData, elem => { return elem.department_id == id; });
  }

  public getDepartmentDataByID(id: number): DepartmentData {
    return _.find(this.departmentData, elem => { return elem.department_id == id; });
  }

}
