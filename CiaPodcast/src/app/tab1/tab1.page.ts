import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  podcasts: Object

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const items = this.http.get(`https://itunes.apple.com/search
    ?media=podcast&term=Claramente`)
    console.log(items);
    this.podcasts = items.json();
  }

}
