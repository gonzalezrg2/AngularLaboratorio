import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grillas',
  templateUrl: './grillas.component.html',
  styleUrls: ['./grillas.component.scss']
})
export class GrillasComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true
    };
  }

}
