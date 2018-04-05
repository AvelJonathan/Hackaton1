import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';

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

const player = new Player();
player.name = Math.floor(Math.random() * 1000);
console.log(player);

