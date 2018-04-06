import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  heroes; // all the heroes
  hero; // hero par rapport a son id
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
  }

}
