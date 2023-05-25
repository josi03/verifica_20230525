import { Component, OnInit } from '@angular/core';
import { Piatti } from './models/piatti.model';
//import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Piatti' ;
  url =  "https://my-json-server.typicode.com/paolocarugati/semivuota/db" ;
  data: Piatti;
  oPiatti: Observable<Piatti>;

  constructor(public http: HttpClient) {
  }
  ngOnInit(): void {
    this.oPiatti = this.http.get<Piatti>(this.url);
    this.oPiatti.subscribe( d => { 
        this.data = d;
  })
}
}
