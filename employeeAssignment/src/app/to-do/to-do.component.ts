import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  id: number;
  renderDetails: boolean = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.renderDetails = this.route.snapshot.routeConfig.path == "todo/details/:id" ? true : false;
    if (this.route.snapshot.routeConfig.path == "todo/details/:id") {
      this.route.params.subscribe(params => {
        this.id = params.id;
        // to re-render the app-employee-details
        this.renderDetails = false;
        setTimeout(() => { this.renderDetails = true; }, 0);
      });
    }
  }

}
