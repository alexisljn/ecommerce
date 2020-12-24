import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: {
  };

  @Output() addArticle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addArticleToCart(article): void {
   /* const cart = JSON.parse(sessionStorage.getItem('cart'));
    console.log('cart', cart);

    const articlesNames = cart.articles.map(articleCart => articleCart.name);

    if (articlesNames.includes(article.name)) {
      cart.articles.forEach((articleCart) => {
        if (articleCart.name === article.name) { articleCart.quantity++; }
      });

    } else {

      article.quantity = 1;
      cart.articles.push(article);

    }

    article.stock --;*/
    this.addArticle.emit(article);
   // sessionStorage.setItem('cart', JSON.stringify(cart));
  }

}
