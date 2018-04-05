import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

const player = new Player();
player.name = Math.floor(Math.random() * 2);
console.log(player);
