import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {

    interface UserResponse {
      id: string;
      name: string;
      images: any;
    }
    this.http.get<UserResponse>('https://akabab.github.io/superhero-api/api/id/1.json').subscribe(data => {
      console.log(data);
      console.log('User ID: ' + data.id);
      console.log('Name: ' + data.name);
      console.log('Image: ' + data.images.md);
    });
  }
}
