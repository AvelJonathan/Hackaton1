import { Router } from '@angular/router';
import { PlayersService } from './../players.service';
import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  heroes;
  health = '';
  constructor(private http: HttpClient, public playersService: PlayersService, private router: Router) {
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
  atkPhyP1() {
    this.playersService.players[1].life = this.playersService.players[1].life - 20;
  }
  atkSpeP1() {
    this.playersService.players[1].life = this.playersService.players[1].life - 11;
  }
  atkPhyP2() {
    this.playersService.players[0].life = this.playersService.players[0].life - 2;
  }
  atkSpeP2() {
    this.playersService.players[0].life = this.playersService.players[0].life - 36;
  }
}
