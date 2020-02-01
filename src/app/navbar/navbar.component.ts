import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isNaveBarOpen = false;
  logo: String;
  ngOnInit() {
    this.logo = "https://cdn.pixabay.com/photo/2014/03/25/16/57/llama-297668_960_720.png";
  }
}
