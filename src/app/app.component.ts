import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ecommerce';

  stock = [
    {
      name: 'PlayStation 5',
      price: 500,
      stock: 2,
      imageUrl: 'https://blog.fr.playstation.com/tachyon/sites/10/2020/11/Featured-Image-PS5-preorder-update.jpg?resize=1088,612&crop_strategy=smart'
    },
    {
      name: 'Microsoft Xbox Series X',
      price: 450,
      stock: 3,
      imageUrl: 'https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png',
    },
    {
      name: 'Nintendo Switch',
      price: 300,
      stock: 7,
      imageUrl: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg',
    },
    {
      name: 'PC gamer',
      price: 2000,
      stock: 1,
      imageUrl: 'https://powerlab.fr/3997-superlarge_default/pc-gamer-rainbow.jpg',
    }
  ];

  cart = {
    total: 0,
    articles: []
  };

  constructor() {}




}
