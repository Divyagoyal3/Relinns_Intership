import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-parameters',
  templateUrl: './route-parameters.component.html',
  styleUrl: './route-parameters.component.css'
})
export class RouteParametersComponent {
  parameter: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.parameter = params['id'];
    });
  }
}
