import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cart: {total: 0, articles: []};

  constructor() { }

  ngOnInit(): void {
  }

}
