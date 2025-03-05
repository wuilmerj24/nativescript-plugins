import { Component } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  demos = [
    {
      name: 'country-code',
    },
    {
      name: 'gallery-view',
    },
    {
      name: 'time-range',
    },
    {
      name: 'wj24secrets',
    },
  ];
}
