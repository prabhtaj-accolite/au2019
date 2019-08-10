import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchService } from '../fetch.service';
import EmployeeData from '../employee-data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class EmployeeComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource = new MatTableDataSource(this.fetchService.getEmployeeData());
  displayedColumns = ['id', 'name'];
  expandedElement: EmployeeData;
  stringify_ = (x: any) => JSON.stringify(x);
  isTodo: boolean = null;

  constructor(private router: Router, private fetchService: FetchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isTodo = this.route.snapshot.routeConfig.path == "todo" || this.route.snapshot.routeConfig.path == "todo/details/:id" ? true : false;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private navigate(id: number): void {
    this.router.navigate(['employee/details', id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClick(element: EmployeeData): void {
    if (!this.isTodo) {
      this.expandedElement = this.expandedElement === element ? null : element;
      this.navigate(element.id);
    }
    else {
      this.router.navigate(['todo/details', element.id]);
    }
  }

  onDeletePress(id: number): void {
    this.fetchService.deleteEmployeeByID(id);
    this.dataSource = new MatTableDataSource(this.fetchService.getEmployeeData());
    this.ngOnInit();
    this.router.navigate(['employee/']);
  }

}
