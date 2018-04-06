import { PlayersService } from './../players.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  heroes; // all the heroes
  // /selectPlayer = null;*/
  selectedPlayer = [];
  constructor(private apiService: ApiService, private playersService: PlayersService, private router: Router) { }

  ngOnInit() {
    this.playersService.players = [];
    this.apiService.getHeroes().subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    });
  }
  getHero(param, player) {
    console.log(param);
    this.heroes[param].life = 100;
    this.selectedPlayer[player] = this.heroes[param];
    console.log(this.selectedPlayer);
    this.playersService.players.push(this.heroes[param]);
    if (this.playersService.players.length === 2) {
      this.router.navigate(['fight']);
    }
    // this.heroes.life = 100;
    // console.log(this.heroes.life);
    // return this.heroes[param].images.sm;
  }
  /*getPerso(param) {
    this.selectPlayer = this.heroes(param);
  }*/
}
