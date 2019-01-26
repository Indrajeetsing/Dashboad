import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { FilterRuleOptionPipe } from './filter-rule-option.pipe';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private appService: AppService) {

  }

initialData: any = [];
produces:any = [];
 searchVariable: string = '';
 loading = true;

  displayedColumns: string[] = ['name', 'category', 'brand', 'price per paund', 'available'];
    dataSource = new MatTableDataSource();

    ngOnInit() {
      this.appService.getFilteredItems(this.searchVariable).subscribe(
        (response: any) => {
          console.log(response);
          this.produces = response.produces;
          this.dataSource = new MatTableDataSource(this.produces);
          this.initialData = JSON.parse(JSON.stringify(this.produces));
          this.loading = false;
      }, (error: any) => {
        this.loading = false;
        console.log(error);
      });
    }

    applyFilter(filterValue: string) {
      this.loading = true;
      this.appService.getFilteredItems(filterValue).subscribe(
        (response: any) => {
        this.loading = false;
        this.dataSource = response.produces;
      }, (error: any) => {
        this.loading = false;
        console.log(error);
      });
    }

filterOptions(event) {
  this.produces = new FilterRuleOptionPipe().transform(this.initialData, event.toLowerCase())
  this.applyFilter(event);
}

resetOptions() {
  this.produces = this.initialData;
}
}
