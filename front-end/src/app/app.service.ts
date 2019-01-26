import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(
    private http: HttpClient){}

    // GET filtered filterItems
  getFilteredItems(searchItem) {
    return this.http.get(`http://localhost:8000/search?name=${searchItem}`);
  }
}
