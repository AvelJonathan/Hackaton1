import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  heroes;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe(heroes => {
      this.heroes = heroes;
    });
  }
}
