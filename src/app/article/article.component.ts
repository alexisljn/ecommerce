import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: {
  };

  @Input() cart;


  constructor() { }

  ngOnInit(): void {
  }

  addArticleToCart(article): void {

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

}

