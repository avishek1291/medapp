import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {

  constructor() { }
  demoProducts = [];
  ngOnInit() {
    this.demoProducts = [
      { imgUrl: 'assets/ayurveda.jpg', heading: 'ayurveda medicines', info: ''},
      { imgUrl: 'assets/calpol.jpg', heading: 'fever medicines', info: ''},
      { imgUrl: 'assets/capsules.jpg', heading: 'cough and cold', info: ''},
      { imgUrl: 'assets/digine.jpg', heading: 'digestion', info: ''},
      { imgUrl: 'assets/origano.jpg', heading: 'self help', info: ''},
      { imgUrl: 'assets/paracetemol.jpg', heading: 'common', info: ''},
      { imgUrl: 'assets/lotion.jpg', heading: 'winter care', info: ''}
    ];
  }

}
