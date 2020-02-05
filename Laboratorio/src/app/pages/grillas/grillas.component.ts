import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { log } from 'util';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-grillas',
  templateUrl: './grillas.component.html',
  styleUrls: ['./grillas.component.scss']
})
export class GrillasComponent implements AfterViewInit, OnDestroy, OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtTrigger: Subject<string> = new Subject();

  dtOptions: any = {};
  mostrarTabla = false;
  color = true;


  constructor() {
  }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
    };

  }


  ngAfterViewInit(): void {
    this.dtTrigger.next();
    setTimeout(() => {
      this.mostrarTabla = true;
    }, 0);

  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.mostrarTabla = false;
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
      setTimeout(() => {
        this.mostrarTabla = true;
      }, 0);
    });
  }

}
