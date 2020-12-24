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
      price: 513.49,
      stock: 25
    },
    {
      name: 'Microsoft Xbox Series X',
      price: 499,
      stock: 3
    },
    {
      name: 'Nintendo Switch',
      price: 399.99,
      stock: 7
    },
    {
      name: 'PC gamer',
      price: 2000,
      stock: 1
    }
  ];

  cart = {
    total: 0,
    articles: []
  };

  changeCart = (article) => {
    console.log(this.cart);

    const articlesNames = this.cart.articles.map(articleCart => articleCart.name);

    if (articlesNames.includes(article.name)) {
       this.cart.articles.forEach((articleCart) => {
        if (articleCart.name === article.name) { articleCart.quantity++; }
      });

    } else {

      article.quantity = 1;
      this.cart.articles.push(article);

    }

    article.stock --;
  };

  constructor() {
  }




}
