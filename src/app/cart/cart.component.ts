import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cart;
  @Input() stock;

  constructor() { }

  ngOnInit(): void {
  }

  removeArticleFromCart = (article) => {
    const articlesNames = this.cart.articles.map(articleCart => articleCart.name);

    this.cart.articles.forEach((articleCart) => {
      if (articleCart.name === article.name) {
        articleCart.quantity--;

        if (articleCart.quantity === 0) {
          const CartIndex = articlesNames.indexOf(articleCart.name);
          this.cart.articles.splice(CartIndex, 1);
        }
      }
    });

    this.cart.total -= article.price;

    const stockArticleNames = this.stock.map(stockArticle => stockArticle.name);
    const stockIndex = stockArticleNames.indexOf(article.name);

    this.stock[stockIndex].stock += 1;

  }

  addArticleToCart = (article) => {
    const articlesNames = this.cart.articles.map(articleCart => articleCart.name);

    if (articlesNames.includes(article.name)) {
      this.cart.articles.forEach((articleCart) => {
        if (articleCart.name === article.name) { articleCart.quantity++; }
      });

    } else {

      article.quantity = 1;
      this.cart.articles.push(article);

    }

    this.cart.total += article.price;
    article.stock --;

    if (article.stock === 0) {

    }
  }

  hasStock = (articleName) => {

    const articlesNamesInStock = this.stock.map(articleStock => articleStock.name);

    const index = articlesNamesInStock.indexOf(articleName);

    if (this.stock[index].stock > 0) return true;

    return false;
  }

}
