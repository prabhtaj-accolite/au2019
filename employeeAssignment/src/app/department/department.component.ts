import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { FetchService } from '../fetch.service';
import DepartmentData from '../department-data';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['../employee/employee.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class DepartmentComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource = new MatTableDataSource(this.fetchService.getDepartmentData());
  displayedColumns = ['department_id', 'department_name'];
  expandedElement: DepartmentData;
  stringify_ = (x: any) => JSON.stringify(x);

  constructor(private router: Router, private fetchService: FetchService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private navigate(id: number): void {
    this.router.navigate(['department/details', id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClick(element: DepartmentData) {
    this.expandedElement = this.expandedElement === element ? null : element;
    this.navigate(element.department_id);
  }

  onDeletePress(id: number): void {
    this.fetchService.deleteDepartmnetByID(id);
    this.dataSource = new MatTableDataSource(this.fetchService.getDepartmentData());
    this.ngOnInit();
    this.router.navigate(['department/']);
  }

}
