import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  heroes; // all the heroes
  // /selectPlayer = null;*/
  selectedPlayer = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getHeroes().subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    });
  }
  getHero(param, player) {
    console.log(param);
    this.selectedPlayer[player] = this.heroes[param];
    // return this.heroes[param].images.sm;
  }
  /*getPerso(param) {
    this.selectPlayer = this.heroes(param);
  }*/
}
