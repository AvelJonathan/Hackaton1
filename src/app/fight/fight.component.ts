import { Router } from '@angular/router';
import { PlayersService } from './../players.service';
import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  heroes;
  health = '';
  constructor(private http: HttpClient, private playersService: PlayersService, private router: Router) {
  }
  ngOnInit(): void {
    if (this.playersService.players.length !== 2) {
      this.router.navigate(['']);
    }
    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe(heroes => {
      this.heroes = heroes;
      this.health = '100%';
    });

  }
}
