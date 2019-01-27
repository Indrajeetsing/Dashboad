import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FilterRuleOptionPipe } from './filter-rule-option.pipe';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private appService: AppService) {}

  initialData: any = [];
  produces: any = [];
  searchVariable: string = '';
  loading = true;
  displayedColumns: string[] = ['name', 'category', 'brand', 'price per paund', 'available', 'aisle name'];
  dataSource = new MatTableDataSource();

  ngOnInit() {
    // calling API and getting data
    this.appService.getFilteredItems(this.searchVariable).subscribe(
      (response: any) => {
        this.produces = response.produces;
        this.dataSource = new MatTableDataSource(this.produces);
        // using initialData to reset initial value of produces(as it's gonna change after applying filter)
        this.initialData = JSON.parse(JSON.stringify(this.produces));
        this.loading = false;
      }, (error: any) => {
        this.loading = false;
        console.log(error);
      });
  }

// this will call API and will set filtered data as dataSource for table
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

// Filtering autocomplition list
  filterOptions(event) {
    this.produces = new FilterRuleOptionPipe().transform(this.initialData, event.toLowerCase())
    this.applyFilter(event);
  }
}
