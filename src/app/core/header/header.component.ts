import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  password: any;
  isLoggedin = false;
  constructor() { }

  ngOnInit() {
  //  this.password = localStorage.get('password') === 'test';
  //  if (this.password) {
  //    this.isLoggedin = true;
  //  }
  }
  logout() {
    localStorage.set('password', null);
  }
}
