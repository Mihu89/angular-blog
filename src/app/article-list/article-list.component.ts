import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models';
import { ARTICLES } from '../mocks/mock-articles';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Article[];
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe(articles => this.articles = articles);
  }

}
